/* eslint no-param-reassign:0 */
import Router from 'koa-router';
import send from 'koa-sendfile';
import path from 'path';
import fs from 'fs';

import { Publication } from '../models/Publication';
import { News } from '../models/News';
import _debug from 'debug';
const debug = _debug('app:server:routes:pubsNews');

const router = new Router({
  prefix: '/LINCS/api/v1',
});

/**
 * Fetch all publications. Order them by their year_published and PubMed Id (pm_id).
 * Include the authors of the publications.
 */
router.get('/publications', async (ctx) => {
  try {
    const pubs = await Publication
      .query(qb => qb.select().orderByRaw('year_published DESC, pm_id DESC'))
      .fetchAll({ withRelated: [
        'authors',
        { authors: function(query) { query.orderBy('author_rank')} }
      ] });
    // Omit pivot by default
    const includePivot = !!ctx.query.includePivot;
    ctx.body = pubs.toJSON({ omitPivot: !includePivot });
  } catch (e) {
    debug(e);
    ctx.throw(500, 'An error occurred obtaining datasets.');
  }
});

/**
 * Generates a publication reference in the
 * {@link http://refman.com/sites/rm/files/m/direct_export_ris.pdf RIS format}
 * @param  {Object} pub The publication to reference
 * @return {Promise}   A promise that resolves with the filePath and filename of the
 * RIS file to be downloaded
 */
function generateRIS(pub) {
  return new Promise(resolve => {
    const firstAuthorLastName = getFirstAuthorName(pub);
    const id = `${firstAuthorLastName}${pub.yearPublished}`;
    let filename = `${id}.ris`;
    if (!!pub.pmId) {
      filename = `${id}-${pub.pmId}.ris`;
    } else if (!!pub.pmcId) {
      filename = `${id}-${pub.pmcId}.ris`;
    } else if (!!pub.doi) {
      filename = `${id}-${encodeURIComponent(pub.doi)}.ris`;
    }
    const filePath = path.join(__dirname, '/', filename);
    const stream = fs.createWriteStream(filePath);
    stream.write('TY  - JOUR\n');
    pub.authors.forEach(author => stream.write(`AU  - ${author.name}\n`));
    stream.write(`PY  - ${pub.yearPublished}\n`);
    stream.write(`DA  - ${pub.yearPublished}//\n`);
    stream.write(`TI  - ${pub.articleName}\n`);
    stream.write(`T2  - ${pub.journalName}\n`);
    if (!!pub.ppPages) {
      if (pub.ppPages.toString().indexOf('-') !== -1) {
        stream.write(`SP  - ${pub.ppPages.split('-')[0]}\n`);
        stream.write(`EP  - ${pub.ppPages.split('-')[1]}\n`);
      } else {
        stream.write(`SP  - ${pub.ppPages}\n`);
        stream.write(`EP  - ${pub.ppPages}\n`);
      }
    }
    stream.write(`VL  - ${pub.volume}\n`);
    if (!!pub.issue) {
      stream.write(`IS  - ${pub.issue}\n`);
    }
    stream.write(`AB  - ${pub.abstract}\n`);
    if (!!pub.doi) {
      stream.write(`DO  - ${pub.doi}\n`);
    }
    stream.write(`ID  - ${id}\n`);
    stream.write(`ER  - \n`);
    stream.end();
    stream.on('finish', () => resolve({ filePath, filename }));
  });
}

/**
 * Generates a publication reference in the
 * {@link http://wiki.cns.iu.edu/pages/viewpage.action?pageId=1933370 ENW format}
 * @param  {Object} pub The publication to reference
 * @return {Promise}   A promise that resolves with the filePath and filename of the
 * ENW file to be downloaded
 */
function generateENW(pub) {
  return new Promise(resolve => {
    const firstAuthorLastName = getFirstAuthorName(pub);
    const id = `${firstAuthorLastName}${pub.yearPublished}`;
    let filename = `${id}.enw`;
    if (!!pub.pmId) {
      filename = `${id}-${pub.pmId}.enw`;
    } else if (!!pub.pmcId) {
      filename = `${id}-${pub.pmcId}.enw`;
    } else if (!!pub.doi) {
      filename = `${id}-${encodeURIComponent(pub.doi)}.enw`;
    }
    const filePath = path.join(__dirname, '/', filename);
    const stream = fs.createWriteStream(filePath);
    stream.write('%0 Journal Article\n');
    stream.write(`%T ${pub.articleName}\n`);
    pub.authors.forEach(author => stream.write(`%A ${author.name}\n`));
    stream.write(`%J ${pub.journalName}\n`);
    stream.write(`%D ${pub.yearPublished}\n`);
    stream.write(`%V ${pub.volume}\n`);
    if (!!pub.issue) {
      stream.write(`%N ${pub.issue}\n`);
    }
    stream.write(`%F ${id}\n`);
    stream.write(`%X ${pub.abstract}\n`);
    stream.write('%9 journal article\n');
    if (!!pub.doi) {
      stream.write(`%R ${pub.doi}\n`);
      stream.write(`%U http://dx.doi.org/${pub.doi}\n`);
    } else if (!!pub.pmId) {
      stream.write(`%U http://www.ncbi.nlm.nih.gov/pubmed/${pub.pmId}\n`);
    } else if (!!pub.pmcId) {
      stream.write(`%U http://www.ncbi.nlm.nih.gov/pmc/articles/${pub.pmcId}\n`);
    } else if (!!pub.otherLink) {
      stream.write(`%U ${pub.otherLink}\n`);
    }
    if (!!pub.ppPages) {
      stream.write(`%P ${pub.ppPages}\n`);
    }
    stream.end();
    stream.on('finish', () => resolve({ filePath, filename }));
  });
}

/**
 * Generates a publication reference in the {@link http://www.bibtex.org/Format/ BIBTEX format}
 * @param  {Object} pub The publication to reference
 * @return {Promise}   A promise that resolves with the filePath and filename of the
 * BIBTEX file to be downloaded
 */
function generateBIB(pub) {
  return new Promise(resolve => {
    const firstAuthorLastName = getFirstAuthorName(pub);
    const id = `${firstAuthorLastName}${pub.yearPublished}`;
    let filename = `${id}.bib`;
    if (!!pub.pmId) {
      filename = `${id}-${pub.pmId}.bib`;
    } else if (!!pub.pmcId) {
      filename = `${id}-${pub.pmcId}.bib`;
    } else if (!!pub.doi) {
      filename = `${id}-${encodeURIComponent(pub.doi)}.bib`;
    }
    const filePath = path.join(__dirname, '/', filename);
    const stream = fs.createWriteStream(filePath);
    stream.write(`@Article{${id}\n`);
    stream.write(`author="${pub.authors.map(a => a.name).join(' and ')}",\n`);
    stream.write(`title="${pub.articleName}",\n`);
    stream.write(`journal="${pub.journalName}",\n`);
    stream.write(`year="${pub.yearPublished}",\n`);
    stream.write(`volume="${pub.volume}",\n`);
    if (!!pub.issue) {
      stream.write(`number="${pub.issue}",\n`);
    }
    if (!!pub.ppPages) {
      stream.write(`pages="${pub.ppPages}",\n`);
    }
    stream.write(`abstract="${pub.abstract}",\n`);
    if (!!pub.doi) {
      stream.write(`doi="${pub.doi}",\n`);
    }
    if (!!pub.doi) {
      stream.write(`url="http://dx.doi.org/${pub.doi}"\n`);
    } else if (!!pub.pmId) {
      stream.write(`url="http://www.ncbi.nlm.nih.gov/pubmed/${pub.pmId}"\n`);
    } else if (!!pub.pmcId) {
      stream.write(`url="http://www.ncbi.nlm.nih.gov/pmc/articles/${pub.pmcId}"\n`);
    } else if (!!pub.otherLink) {
      stream.write(`url="${pub.otherLink}"\n`);
    } else {
      stream.write(`url=""\n`);
    }
    stream.write('}');
    stream.end();
    stream.on('finish', () => resolve({ filePath, filename }));
  });
}

/**
 * Downloads the publication citation for the given publication id
 * @param  {String} id The publication id for which the citation will be downloaded.
 * @param  {String} refType The type of citation to download. Either ris, enw, or bib.
 */
router.get('/publications/:id/reference/:refType', async (ctx) => {
  const pubModel = await Publication
    .where('id', ctx.params.id)
    .fetch({
      withRelated: [
        'authors',
        { authors: function(query) { query.orderBy('author_rank')} }
      ]
    });
  const publication = pubModel.toJSON();
  let fileInfo;
  if (ctx.params.refType === 'ris') {
    fileInfo = await generateRIS(publication);
  } else if (ctx.params.refType === 'enw') {
    fileInfo = await generateENW(publication);
  } else if (ctx.params.refType === 'bib') {
    fileInfo = await generateBIB(publication);
  }
  ctx.set('Content-disposition', `attachment; filename=${fileInfo.filename}`);
  await send(ctx, fileInfo.filePath);
  if (!ctx.status) {
    ctx.throw(500, 'An error occurred generating the ris file.');
  }
  fs.unlinkSync(fileInfo.filePath);
});

// News need to exist in database first
router.get('/news', async (ctx) => {
  try {
    const news = await News.forge()
      .orderBy('date', 'desc')
      .fetchAll();
    ctx.body = news.toJSON();
  } catch (e) {
    debug(e);
    ctx.throw(500, 'An error occurred obtaining news.');
  }
});


export default router;


/**
 * Utility functions
 * ----------------------------------------------------------------------------*/

function getFirstAuthorName(pub) {
  // IMPORTANT: This function is only guaranteed to work because the publication
  // argument sorts the authors by author_rank. I don't like this, but it's the
  // simplest solution for now.
  const firstAuthor = pub.authors[0];
  return firstAuthor.name.split(' ')[0];
}
