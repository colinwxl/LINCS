/* eslint no-param-reassign:0 */
import Router from 'koa-router';
import send from 'koa-sendfile';
import fs from 'fs';
import path from 'path';
import moment from 'moment';

import _debug from 'debug';
const debug = _debug('app:server:routes:datasets');
import { knex } from '../serverConf';
import { Dataset } from '../models/Dataset';
import { Center } from '../models/Center';

const router = new Router({
  prefix: '/LINCS/api/v1/datasets'
});


/**
 * Routes
 * ----------------------------------------------------------------------------*/


/**
 * Fetch all datasets and the relationships provided in the `include` query parameter.
 */
router.get('/', async (ctx) => {
  // Include the dataset's center by default.
  // Add desired relationships in the include query parameter
  // Items of the array are formatted for the withRelated option of bookshelf .fetchAll()
  // http://bookshelfjs.org/#Model-instance-fetch
  // Nested relationships (tissues of cells) are loaded using '.'
  // Ex. --> ...?include=center,smallMolecules,cells,cells.tissues,cells.diseases,cells.synonyms
  let withRelated = ['center'];
  if (ctx.query.include) {
    withRelated = ctx.query.include.split(',');
  }
  try {
    const datasets = await Dataset.fetchAll({ withRelated });
    // Omit pivot by default
    const includePivot = !!ctx.query.includePivot;
    ctx.body = datasets.toJSON({ omitPivot: !includePivot });
  } catch (e) {
    debug(e);
    ctx.throw(500, 'An error occurred obtaining datasets.');
  }
});

router.get('/clicks', async (ctx) => {
  try {
    const clicks = await Dataset.fetchAll({ columns: ['id', 'lincs_id', 'method', 'clicks'] });
    ctx.body = clicks.toJSON();
  } catch (e) {
    debug(e);
    ctx.throw(500, 'An error occurred obtaining datasets.');
  }
});

/**
 * Fetch an array of datasets that are the most recent dataset from each center.
 */
router.get('/recent', async (ctx) => {
  try {
    // Get all centers and their datasets in order of date retrieved
    const centers = await Center
      .fetchAll({
        withRelated: [
          { datasets: (query) => query.orderBy('date_released', 'desc') },
        ],
      })
      .then(models => models.toJSON({ omitPivot: true }));
    // Remove centers without datasets
    const centersWithDatasets = centers.filter(center => center.datasets.length);
    // Get the id of the most recent dataset of each center
    const datasetIds = centersWithDatasets.map(center => center.datasets[0].id);
    // Query for these datasets
    const datasets = await Dataset
      .query(qb => qb.whereIn('id', datasetIds))
      .fetchAll({ withRelated: ['center'] })
      .then(models => models.toJSON({ omitPivot: true }));
    ctx.body = datasets;
  } catch (e) {
    debug(e);
    ctx.throw(500, 'An error occurred obtaining datasets.');
  }
});

/**
 * Fetch all of the information needed for the DataTree. Speeds up initial load of
 * the tree on the front end.
 */
router.get('/tree', async (ctx) => {
  const assays = await Dataset
    .query(qb => qb.distinct('assay').select().orderBy('assay', 'asc'))
    .fetchAll()
    .then(models => models.toJSON().map(obj => obj.assay));
  const classes = await Dataset
    .query(qb => qb.distinct('classification').select().orderBy('classification', 'asc'))
    .fetchAll()
    .then(models => models.toJSON().map(obj => obj.classification));
  const methods = await Dataset
    .query(qb => qb.distinct('method').select().orderBy('method', 'asc'))
    .fetchAll()
    .then(models => models.toJSON().map(obj => obj.method));
  // Find all centers. Return a sorted array with centerNames and
  // remove centers without any datasets (DCIC)
  const centers = await Center
    .fetchAll({ withRelated: ['datasets'] })
    .then(centerModels => centerModels.toJSON({ omitPivot: true }))
    .then(centerArr =>
      centerArr
        .filter(centerObj => !!centerObj.datasets.length)
        .map(center => center.name)
        .sort()
    );

  const alphabetical = await Dataset
    .query(qb => qb.select('id').orderBy('method', 'asc'))
    .fetchAll()
    .then(models => models.toJSON().map(obj => obj.id));

  const datasets = await Dataset.fetchAll().then(models => models.toJSON());
  // So here we have a date dataset map and an array of dates.
  // dateDatasetMap is structured like { 2016: { 1 (month index): [datasets] } }
  const dateDatasetMap = {};
  // dates is structured like [{ year: 2016, months: [1, 2, 3 (month indicies)] }]
  let dates = [];

  // Dates only contains years and months that exist in the dateDatasetMap so this is essentially
  // a way to sort the keys of dateDatasetMap to ensure that we can sort the years and
  // months in the proper order in the tree.
  datasets.forEach((ds) => {
    const date = moment(ds.dateReleased);
    const month = date.month();
    const year = date.year();
    // Check if an object exists in dates with the year of the current dataset
    if (dates.filter(obj => obj.year === year).length === 0) {
      dates.push({ year, months: [month] });
    } else {
      // Find the object with the correct year and add the month of the current dataset if it does
      // not exist there already
      dates.forEach(obj => {
        if (obj.year === year && obj.months.indexOf(month) === -1) {
          obj.months.push(month);
        }
      });
    }
    // Build the dateDatasetMap
    if (dateDatasetMap[year]) {
      if (dateDatasetMap[year][month]) {
        dateDatasetMap[year][month].push(ds.id);
      } else {
        dateDatasetMap[year][month] = [ds.id];
      }
    } else {
      dateDatasetMap[year] = {
        [month]: [ds.id],
      };
    }
  });
  // Sort the objects in the dates array by their year
  dates = dates.sort((a, b) => {
    const result = a.year < b.year;
    return result ? 1 : -1;
  });
  // Sort the months array in each object in the dates array
  dates.forEach(dateObj => {
    dateObj.months.sort((a, b) => b - a);
  });
  ctx.body = { assays, classes, methods, centers, alphabetical, dates, dateDatasetMap };
});

/**
 * Search the datasets based on the query given in the `q` query parameter.
 */
router.get('/search', async (ctx) => {
  if (!ctx.query.q || ctx.query.q === '') {
    ctx.throw(400, 'Query parameter q required for search.');
  }

  // Get row IDs based on full-text searches of table fields.
  // --------------------------------------------------------------------------
  const limit = ctx.query.limit || 100;

  const dsIds = await getIdsFromFullTextSearch(
    'datasets',
    ['description', 'full_assay_name', 'classification', 'assay',
      'method', 'physical_detection', 'lincs_id'],
    ctx.query.q,
    limit
  );

  const cellIds = await getIdsFromFullTextSearch(
    'cells',
    ['name', 'lincs_id', 'source'],
    ctx.query.q,
    limit
  );

  const smIds = await getIdsFromFullTextSearch(
    'small_molecules',
    ['pubchem_cid', 'name', 'source', 'broad_id', 'lincs_id'],
    ctx.query.q,
    limit
  );

  const centerIds = await getIdsFromFullTextSearch(
    'centers',
    ['name', 'description'],
    ctx.query.q,
    limit
  );

  // Translate row IDs to dataset IDs. We could do this manually, but let's let
  // Knex handle the joins for now. We can optimize this if the results are too
  // slow.
  // --------------------------------------------------------------------------
  const dsetsWithCells = await knex
    .select('dataset_id')
    .from('cells_datasets')
    .whereIn('cell_id', cellIds);

  const dsetsWithSms = await knex
    .select('dataset_id')
    .from('small_molecules_datasets')
    .whereIn('small_molecule_id', smIds);

  const dsetsWithCenters = await knex
    .select('id')
    .from('datasets')
    .whereIn('center_id', centerIds);

  // Concatenate dataset IDs with IDs from other Knex queries. We don't have to
  // verify that the IDs are unique because Knex will use `WHERE IN`.
  // --------------------------------------------------------------------------
  const datasetIds = dsIds.concat(
    dsetsWithCells.map(obj => obj.dataset_id),
    dsetsWithSms.map(obj => obj.dataset_id),
    dsetsWithCenters.map(obj => obj.id)
  );

  // Fetch the datasets with the gathered ids.
  // Include the dataset's center by default.
  // Add desired relationships in the include query parameter
  // Items of the array are formatted for the withRelated option of bookshelf .fetchAll()
  // http://bookshelfjs.org/#Model-instance-fetch
  // Nested relationships (tissues of cells) are loaded using '.'
  // Ex. --> ...?include=center,smallMolecules,cells,cells.tissues,cells.diseases,cells.synonyms
  let withRelated = ['center'];
  if (ctx.query.include) {
    withRelated = ctx.query.include.split(',');
  }
  const datasets = await Dataset
    .query(qb => qb.whereIn('id', datasetIds))
    .fetchAll({ withRelated });

  // Omit the pivot included by bookshelf in the .toJSON() method by default.
  const includePivot = !!ctx.query.includePivot;
  ctx.body = datasets.toJSON({ omitPivot: !includePivot });
});

/**
 * Increment the number of clicks on a dataset.
 * @param {Array} ctx.request.body.datasetIds Dataset ids whose clicks need to be incremented.
 */
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
          'center',
          'cells',
          'cells.tissues',
          'cells.diseases',
          'cells.synonyms',
          //'smallMolecules',
        ]
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

/**
 * Fetches a specific dataset
 * @param  {String} id The id of the dataset to be fetched.
 */
router.get('/:id', async (ctx) => {
  let id = -1;
  // Include the dataset's center by default.
  // Add desired relationships in the include query parameter
  // Items of the array are formatted for the withRelated option of bookshelf .fetchAll()
  // http://bookshelfjs.org/#Model-instance-fetch
  // Nested relationships (tissues of cells) are loaded using '.'
  // Ex. --> ...?include=center,smallMolecules,cells,cells.tissues,cells.diseases,cells.synonyms
  let withRelated = ['center'];
  if (ctx.query.include) {
    withRelated = ctx.query.include.split(',');
  }
  try {
    id = parseInt(ctx.params.id, 10);
  } catch (e) {
    debug(e);
    ctx.throw(400, 'Dataset Id must be a number');
  }
  try {
    const includePivot = !!ctx.query.includePivot;
    // Omit pivot by default
    const dataset = await Dataset
      .where('id', id)
      .fetch({ withRelated })
      .then(model => model.toJSON({ omitPivot: !includePivot }));
    ctx.body = dataset;
  } catch (e) {
    debug(e);
    ctx.throw(500, 'An error occurred obtaining datasets.');
  }
});

/**
 * Downloads the Clustergrammer network for the given dataset id
 * @param  {String} id The dataset id for which the Clustergrammer network will be downloaded.
 */
router.get('/:id/network', async (ctx) => {
  let id = -1;
  try {
    id = parseInt(ctx.params.id, 10);
  } catch (e) {
    debug(e);
    ctx.throw(400, 'Dataset Id must be a number');
    return;
  }
  // Fetch dataset with given id, only selecting the lincs_id column
  const dataset = await Dataset
    .where('id', id)
    .fetch({ columns: ['lincs_id'] })
    .then(dsModel => dsModel.toJSON());
  // Here we are trying to load a file with name of the dataset's lincs id. If it exists, in
  // the ../networks folder, that means a clustergram is available. If that's the case, send
  // the JSON. If it doesn't exist, an error will be thrown and a 400 response will be sent
  // in the catch {} block.
  let network;

  // Try curated JSON first, then default to automatically processed JSON next.
  try {
    const curatedJson = `../networks/${dataset.lincsId}-vis.json`;
    network = require(curatedJson); // eslint-disable-line
  } catch (e) {}

  try {
    const json = `../networks/${dataset.lincsId}.json`;
    network = require(json); // eslint-disable-line
  } catch (e) {
    debug(e);
    ctx.throw(400, 'Network is not available for this dataset.');
    return;
  }
  ctx.body = !!network ? network : {};
});

/**
 * Downloads the raw data package for the given dataset id
 * @param  {String} id The dataset id for which the raw data package will be downloaded.
 */
router.get('/:id/download', async (ctx) => {
  // Dataset files exist in /usr/client/dist/files/datasets/...
  // However, this folder is mounted from HDFS when the application is deployed.
  // This is done because the files can get very large. The files can be found at
  // http://elizabeth:50070/explorer.html#/apps/lincs/datasets
  if (process.env.NODE_ENV !== 'production') {
    ctx.throw(400, 'Datasets can only be downloaded in production.');
  }
  try {
    let dataset = await Dataset.where('id', ctx.params.id).fetch();
    dataset = dataset.toJSON();
    let filename = `${dataset.lincsId}-${dataset.classification}-${dataset.method}.tar.gz`;
    let filePath = `/usr/src/dist/files/datasets/${dataset.lincsId}.tar.gz`;
    if (dataset.method === 'KINOMEScan') {
      filename = `${dataset.classification}-KINOMEScan.tar.gz`;
      filePath = '/usr/client/dist/files/datasets/KINOMEScan.zip';
    } else if (dataset.method === 'KiNativ') {
      filename = `${dataset.classification}-KiNativ.tar.gz`;
      filePath = '/usr/client/dist/files/datasets/KiNativ.zip';
    }
    ctx.set('Content-disposition', `attachment; filename=${filename}`);
    // Use koa-sendfile to send the file, given the path.
    await send(ctx, filePath);
    if (!ctx.status) {
      ctx.throw(500, 'An error occurred downloading the dataset package.');
    }
  } catch (e) {
    debug(e);
    ctx.throw(500, 'An error occurred downloading the dataset package.');
  }
});

/**
 * Downloads the gct file for the given dataset id
 * @param  {String} id The dataset id for which the gct file will be downloaded.
 */
router.get('/:id/download/gct', async (ctx) => {
  // Dataset files exist in /usr/client/dist/files/datasets/...
  // However, this folder is mounted from HDFS when the application is deployed.
  // This is done because the files can get very large. The files can be found at
  // http://elizabeth:50070/explorer.html#/apps/lincs/datasets
  if (process.env.NODE_ENV !== 'production') {
    ctx.throw(400, 'GCT files can only be downloaded in production.');
  }
  try {
    const dataset = await Dataset
      .where('id', ctx.params.id)
      .fetch()
      .then(model => model.toJSON());
    let filename = `${dataset.lincsId}-${dataset.classification}-${dataset.method}.gct`;
    let filePath = `/usr/src/dist/files/datasets/${dataset.lincsId}.gct`;
    if (dataset.method === 'KINOMEScan') {
      filename = `${dataset.classification}-KINOMEScan.gct`;
      filePath = '/usr/client/dist/files/datasets/KINOMEScan.gct';
    } else if (dataset.method === 'KiNativ') {
      filename = `${dataset.classification}-KiNativ.gct`;
      filePath = '/usr/client/dist/files/datasets/KiNativ.gct';
    }
    ctx.set('Content-disposition', `attachment; filename=${filename}`);
    // Use koa-sendfile to send the file, given the path.
    await send(ctx, filePath);
    if (!ctx.status) {
      ctx.throw(
        400,
        'An error occurred downloading the gct file. It may not be available for this dataset.'
      );
    }
  } catch (e) {
    debug(e);
    ctx.throw(
      500,
      'An error occurred downloading the gct file. It may not be available for this dataset.'
    );
  }
});

/**
 * Downloads the gctx file for the given dataset id
 * @param  {String} id The dataset id for which the gctx file will be downloaded.
 */
router.get('/:id/download/gctx', async (ctx) => {
  // Dataset files exist in /usr/client/dist/files/datasets/...
  // However, this folder is mounted from HDFS when the application is deployed.
  // This is done because the files can get very large. The files can be found at
  // http://elizabeth:50070/explorer.html#/apps/lincs/datasets
  if (process.env.NODE_ENV !== 'production') {
    ctx.throw(400, 'GCTX files can only be downloaded in production.');
  }
  try {
    let dataset = await Dataset.where('id', ctx.params.id).fetch();
    dataset = dataset.toJSON();
    const filename = `${dataset.lincsId}-${dataset.classification}-${dataset.method}.gctx`;
    const filePath = `/usr/src/dist/files/datasets/${dataset.lincsId}.gctx`;
    if (dataset.method === 'KINOMEScan') {
      // filename = `${dataset.classification}-KINOMEScan.gctx`;
      // filePath = '/usr/client/dist/files/datasets/KINOMEScan.gctx';
      ctx.throw(400, 'GCTX file is not currently available for KINOMEScan.');
    } else if (dataset.method === 'KiNativ') {
      // filename = `${dataset.classification}-KiNativ.gctx`;
      // filePath = '/usr/client/dist/files/datasets/KiNativ.gctx';
      ctx.throw(400, 'GCTX file is not currently available for KiNativ.');
    }
    ctx.set('Content-disposition', `attachment; filename=${filename}`);
    // Use koa-sendfile to send the file, given the path.
    await send(ctx, filePath);
    if (!ctx.status) {
      ctx.throw(
        400,
        'An error occurred downloading the gctx file. It may not be available for this dataset.'
      );
    }
  } catch (e) {
    debug(e);
    ctx.throw(
      500,
      'An error occurred downloading the gctx file. It may not be available for this dataset.'
    );
  }
});


/**
 * Downloads the dataset citation for the given dataset id
 * @param  {String} id The dataset id for which the citation will be downloaded.
 * @param  {String} refType The type of citation to download. Either ris, enw, or bib.
 */
router.get('/:id/reference/:refType', async (ctx) => {
  const dsModel = await Dataset.where('id', ctx.params.id).fetch({ withRelated: ['center'] });
  const dataset = dsModel.toJSON();
  let fileInfo;
  if (ctx.params.refType === 'ris') {
    fileInfo = await generateRIS(dataset);
  } else if (ctx.params.refType === 'enw') {
    fileInfo = await generateENW(dataset);
  } else if (ctx.params.refType === 'bib') {
    fileInfo = await generateBIB(dataset);
  }
  ctx.set('Content-disposition', `attachment; filename=${fileInfo.filename}`);
  // Use koa-sendfile to send the file, given the path.
  await send(ctx, fileInfo.filePath);
  if (!ctx.status) {
    ctx.throw(500, 'An error occurred generating the ris file.');
  }
  fs.unlinkSync(fileInfo.filePath);
});


/**
 * Utility functions
 * ----------------------------------------------------------------------------*/
async function getIdsFromFullTextSearch(table, fields, searchTerm, limit) {
  const ids = [];
  const bindings = [];

  let sql = 'SELECT id FROM {0} WHERE'; //MATCH(description) AGAINST(?)';
  sql = sql.replace('{0}', table);
  fields.forEach(function(field, i) {
    if (i != 0) { sql += ' OR'; }
    // IMPORTANT: Let Knex.js handle the bindings to prevent SQL injection.
    sql += ' MATCH (' + field + ') AGAINST(?)';
    bindings.push(searchTerm);
  });
  sql += ' LIMIT ' + limit;
  const resp = await knex.raw(sql, bindings);
  resp[0].forEach(doc => {
    const id = parseInt(doc.id, 10);
    ids.push(id);
  });

  return ids;
}


/**
 * Generates a dataset reference in the
 * {@link http://refman.com/sites/rm/files/m/direct_export_ris.pdf RIS format}
 * @param  {Object} ds The dataset to reference
 * @return {Promise}   A promise that resolves with the filePath and filename of the
 * RIS file to be downloaded
 */
function generateRIS(ds) {
  return new Promise(resolve => {
    const dateReleased = moment(ds.dateReleased);
    const filename = `${ds.method.replace(/\s/g, '_')}-${ds.lincsId}.ris`;
    const filePath = path.join(__dirname, '/', filename);
    const stream = fs.createWriteStream(filePath);
    stream.write('TY  - DATA\n');
    stream.write(`AU  - ${ds.center.name}\n`);
    stream.write(`PY  - ${dateReleased.format('YYYY')}\n`);
    stream.write(`DA  - ${dateReleased.format('YYYY/MM/DD')}\n`);
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

/**
 * Generates a dataset reference in the
 * {@link http://wiki.cns.iu.edu/pages/viewpage.action?pageId=1933370 ENW format}
 * @param  {Object} ds The dataset to reference
 * @return {Promise}   A promise that resolves with the filePath and filename of the
 * ENW file to be downloaded
 */
function generateENW(ds) {
  return new Promise(resolve => {
    const dateReleased = moment(ds.dateReleased);
    const filename = `${ds.method.replace(/\s/g, '_')}-${ds.lincsId}.enw`;
    const filePath = path.join(__dirname, '/', filename);
    const stream = fs.createWriteStream(filePath);
    stream.write('%0 Dataset\n');
    stream.write(`%A ${ds.center.name}\n`);
    stream.write(`%D ${dateReleased.format('YYYY')}\n`);
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


/**
 * Generates a dataset reference in the {@link http://www.bibtex.org/Format/ BIBTEX format}
 * @param  {Object} ds The dataset to reference
 * @return {Promise}   A promise that resolves with the filePath and filename of the
 * BIBTEX file to be downloaded
 */
function generateBIB(ds) {
  return new Promise(resolve => {
    const year = moment(ds.dateReleased).format('YYYY');
    const filename = `${ds.method.replace(/\s/g, '_')}-${ds.lincsId}.bib`;
    const filePath = path.join(__dirname, '/', filename);
    const stream = fs.createWriteStream(filePath);
    stream.write(`@unpublished{${ds.center.name.replace(/\s/g, '_')}${year},\n`);
    stream.write(`author="${ds.center.name}",\n`);
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


export default router;
