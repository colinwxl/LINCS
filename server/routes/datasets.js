/* eslint no-param-reassign:0 */
import Router from 'koa-router';
import send from 'koa-sendfile';
import fs from 'fs';
import path from 'path';
import moment from 'moment';

import _debug from 'debug';
const debug = _debug('app:server:routes:datasets');

import { esClient } from '../serverConf';
import { Dataset } from '../models/Dataset';

const router = new Router({
  prefix: '/LINCS/api/v1/datasets',
});

router.get('/', async (ctx) => {
  let withRelated = [];
  if (ctx.query.include) {
    withRelated = ctx.query.include.split(',');
  }
  try {
    let datasets = await Dataset.fetchAll({ withRelated });
    // Omit pivot by default
    const includePivot = !!ctx.query.includePivot;
    datasets = datasets.toJSON({ omitPivot: !includePivot });
    ctx.body = datasets;
  } catch (e) {
    debug(e);
    ctx.throw(500, 'An error occurred obtaining datasets.');
  }
});


router.get('/search', async (ctx) => {
  if (!ctx.query.q || ctx.query.q === '') {
    ctx.throw(400, 'Query parameter q required for search.');
  }
  const includePivot = !!ctx.query.includePivot;
  let withRelated = [];
  if (ctx.query.include) {
    withRelated = ctx.query.include.split(',');
  }
  const resp = await esClient.search({
    index: 'datasets',
    type: 'dataset',
    size: ctx.query.limit || 100,
    fields: ['_id'],
    body: {
      query: {
        multi_match: {
          fields: [
            'full_assay_name', 'description', 'center_name', 'assay',
            'method', 'classification', 'physical_detection', 'lincs_id',
          ],
          query: ctx.query.q,
          type: 'phrase_prefix',
          max_expansions: 10,
          use_dis_max: false,
        },
      },
    },
  });
  const ids = resp.hits.hits.map(doc => parseInt(doc._id, 10));
  const dsModels = await Dataset.query(qb => qb.whereIn('id', ids)).fetchAll({ withRelated });
  ctx.body = dsModels.toJSON({ omitPivot: !includePivot });
});

// ctx.request.body.datasetIds is an array of dataset ids whose clicks need to be incremented.
router.post('/clicks/increment', async (ctx) => {
  const datasetIds = ctx.request.body.datasetIds;
  const includePivot = !!ctx.query.includePivot;
  if (!datasetIds || !datasetIds.length) {
    ctx.throw(400, 'Dataset Ids required with request.');
    return;
  }
  try {
    const dsModels = await Dataset
      .query(qb => qb.whereIn('id', datasetIds))
      .fetchAll({
        withRelated: [
          'cells',
          'cells.tissues',
          'cells.diseases',
          'cells.synonyms',
          // 'smallMolecules',
        ],
      });
    // debug(dsModels);
    ctx.body = await Promise.all(
      dsModels.map(model => {
        let clicks = model.get('clicks');
        // Omit pivot by default
        return model
          .save({ clicks: ++clicks }, { patch: true, required: true })
          .then(newModel => newModel.toJSON({ omitPivot: !includePivot }));
      })
    );
    // ctx.body = updatedDatasets.map(model => model.toJSON({ omitPivot: !includePivot }));
  } catch (e) {
    debug(e);
    ctx.throw(500, 'An error occurred obtaining datasets.');
  }
});

function generateRIS(ds) {
  return new Promise(resolve => {
    const dateRetrieved = moment(ds.dateRetrieved);
    const filename = `${ds.method.replace(/\s/g, '_')}-${ds.lincsId}.ris`;
    const filePath = path.join(__dirname, '/', filename);
    const stream = fs.createWriteStream(filePath);
    stream.write('TY  - DATA\n');
    stream.write(`AU  - ${ds.centerName}\n`);
    stream.write(`PY  - ${dateRetrieved.format('YYYY')}\n`);
    stream.write(`DA  - ${dateRetrieved.format('YYYY/MM/DD')}\n`);
    if (ds.method && ds.method.length && ds.description && ds.description.length) {
      stream.write(`TI  - ${ds.method}\n`);
      stream.write(`AB  - ${ds.description}\n`);
    } else if (ds.description && ds.description.length) {
      stream.write(`TI  - ${ds.description}\n`);
    }
    stream.write('DP  - NIH LINCS Program\n');
    stream.write(`KW  - ${ds.lincsId}\n`);
    stream.write(`UR  - ${ds.sourceLink}\n`);
    stream.write(`ER  - \n`);
    stream.end();
    stream.on('finish', () => resolve({ filePath, filename }));
  });
}

function generateENW(ds) {
  return new Promise(resolve => {
    const dateRetrieved = moment(ds.dateRetrieved);
    const filename = `${ds.method.replace(/\s/g, '_')}-${ds.lincsId}.enw`;
    const filePath = path.join(__dirname, '/', filename);
    const stream = fs.createWriteStream(filePath);
    stream.write('%0 Dataset\n');
    stream.write(`%A ${ds.centerName}\n`);
    stream.write(`%D ${dateRetrieved.format('YYYY')}\n`);
    if (ds.method && ds.method.length) {
      stream.write(`%T ${ds.method}\n`);
    } else if (ds.description && ds.description.length) {
      stream.write(`%T ${ds.description}\n`);
    }
    stream.write(`%M ${ds.lincsId}\n`);
    stream.write(`%U ${ds.sourceLink}\n`);
    stream.end();
    stream.on('finish', () => resolve({ filePath, filename }));
  });
}

function generateBIB(ds) {
  return new Promise(resolve => {
    const year = moment(ds.dateRetrieved).format('YYYY');
    const filename = `${ds.method.replace(/\s/g, '_')}-${ds.lincsId}.bib`;
    const filePath = path.join(__dirname, '/', filename);
    const stream = fs.createWriteStream(filePath);
    stream.write(`@unpublished{${ds.centerName.replace(/\s/g, '_')}${year},\n`);
    stream.write(`author="${ds.centerName}",\n`);
    stream.write(`year="${year}",\n`);
    if (ds.method && ds.method.length && ds.description && ds.description.length) {
      stream.write(`title="${ds.method}"\n`);
      stream.write(`"${ds.description}"\n`);
    } else if (ds.description && ds.description.length) {
      stream.write(`title="${ds.description}"\n`);
    }
    stream.write(`url="${ds.sourceLink}"\n`);
    stream.write(`note="Unpublished dataset, LINCS ID: ${ds.lincsId}"\n`);
    stream.write(`}\n\n`);
    stream.end();
    stream.on('finish', () => resolve({ filePath, filename }));
  });
}

router.get('/:id', async (ctx) => {
  try {
    let dataset = await Dataset.where('id', ctx.params.id).fetch();
    // Omit pivot by default
    const includePivot = !!ctx.query.includePivot;
    dataset = dataset.toJSON({ omitPivot: !includePivot });
    ctx.body = dataset;
  } catch (e) {
    debug(e);
    ctx.throw(500, 'An error occurred obtaining datasets.');
  }
});

router.get('/:id/download', async (ctx) => {
  try {
    let dataset = await Dataset.where('id', ctx.params.id).fetch();
    dataset = dataset.toJSON();
    let filename = `${dataset.lincsId}-${dataset.classification}-${dataset.method}.tar.gz`;
    let filePath = path.join(__dirname, 'files', 'datasets', `${dataset.lincsId}.tar.gz`);
    if (dataset.method === 'KINOMEScan') {
      filename = `${dataset.classification}-${dataset.method}.tar.gz`;
      filePath = path.join(__dirname, 'files', 'datasets', 'KINOMEScan.zip');
    } else if (dataset.method === 'KiNativ') {
      filename = `${dataset.classification}-${dataset.method}.tar.gz`;
      filePath = path.join(__dirname, 'files', 'datasets', 'KiNativ.zip');
    }
    ctx.set('Content-disposition', `attachment; filename=${filename}`);
    await send(ctx, filePath);
    if (!ctx.status) {
      ctx.throw(500, 'An error occurred generating the ris file.');
    }
  } catch (e) {
    debug(e);
    ctx.throw(500, 'An error occurred obtaining datasets.');
  }
});

router.get('/:id/reference/:refType', async (ctx) => {
  const dsModel = await Dataset.where('id', ctx.params.id).fetch();
  const dataset = dsModel.toJSON();
  let fPath;
  let fName;
  if (ctx.params.refType === 'ris') {
    const { filePath, filename } = await generateRIS(dataset);
    fPath = filePath;
    fName = filename;
  } else if (ctx.params.refType === 'enw') {
    const { filePath, filename } = await generateENW(dataset);
    fPath = filePath;
    fName = filename;
  } else if (ctx.params.refType === 'bib') {
    const { filePath, filename } = await generateBIB(dataset);
    fPath = filePath;
    fName = filename;
  }
  ctx.set('Content-disposition', `attachment; filename=${fName}`);
  await send(ctx, fPath);
  if (!ctx.status) {
    ctx.throw(500, 'An error occurred generating the ris file.');
  }
  fs.unlinkSync(fPath);
});

export default router;
