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

router.get('/clicks', async (ctx) => {
  try {
    const clicks = await Dataset.fetchAll({ columns: ['id', 'lincs_id', 'method', 'clicks'] });
    ctx.body = clicks.toJSON();
  } catch (e) {
    debug(e);
    ctx.throw(500, 'An error occurred obtaining datasets.');
  }
});

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
  const centers = await Dataset
    .query(qb => qb.distinct('center_name').select().orderBy('center_name', 'asc'))
    .fetchAll()
    .then(models => models.toJSON().map(obj => obj.centerName));

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
    const date = moment(ds.dateRetrieved);
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

router.get('/search', async (ctx) => {
  if (!ctx.query.q || ctx.query.q === '') {
    ctx.throw(400, 'Query parameter q required for search.');
  }
  const includePivot = !!ctx.query.includePivot;
  const resp = await esClient.search({
    index: 'lincs',
    size: ctx.query.limit || 100,
    fields: ['_id'],
    body: {
      query: {
        multi_match: {
          fields: [
            'name^2', 'source', 'lincs_id', 'pubchem_cid', 'full_assay_name', 'description',
            'center_name', 'assay', 'method', 'classification', 'physical_detection',
          ],
          query: ctx.query.q,
          type: 'phrase_prefix',
          max_expansions: 10,
          operator: 'and',
        },
      },
    },
  });

  // Result from elasticsearch has objects with
  // { _id: 1, type: 'dataset' } and { _id: 2, type: 'cell' }
  // Split results to find all dsIds and cellIds
  const dsIds = [];
  const cellIds = [];
  const smIds = [];
  resp.hits.hits.forEach(doc => {
    const id = parseInt(doc._id, 10);
    if (doc._type === 'dataset') {
      dsIds.push(id);
    } else if (doc._type === 'cell') {
      cellIds.push(id);
    } else if (doc._type === 'smallmolecule') {
      smIds.push(id);
    }
  });
  // Fetch all datasets. May change later if a specific query is available
  const dsModels = await Dataset
    .fetchAll({
      withRelated: ['cells', 'smallMolecules'],
    });
  const datasets = dsModels.toJSON({ omitPivot: !includePivot });
  // Send all datasets where dataset.id is in dsIds,
  // one of the cells in the dataset has an id that is in cellIds, or
  // one the small molecules in the dataset has an id that is in smIds.
  ctx.body = datasets.filter(ds => {
    if (dsIds.indexOf(ds.id) !== -1) {
      return true;
    }
    const dsCellIds = ds.cells.map(cell => cell.id);
    if (cellIds.some((id) => dsCellIds.indexOf(id) !== -1)) {
      return true;
    }
    const dsSmIds = ds.smallMolecules.map(sm => sm.id);
    return smIds.some((id) => dsSmIds.indexOf(id) !== -1);
  });
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
  let id = -1;
  try {
    id = parseInt(ctx.params.id, 10);
  } catch (e) {
    debug(e);
    ctx.throw(400, 'Dataset Id must be a number');
  }
  try {
    let dataset = await Dataset.where('id', id).fetch();
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
      filePath = '/usr/src/dist/files/datasets/KINOMEScan.zip';
    } else if (dataset.method === 'KiNativ') {
      filename = `${dataset.classification}-KiNativ.tar.gz`;
      filePath = '/usr/src/dist/files/datasets/KiNativ.zip';
    }
    ctx.set('Content-disposition', `attachment; filename=${filename}`);
    await send(ctx, filePath);
    if (!ctx.status) {
      ctx.throw(500, 'An error occurred downloading the dataset package.');
    }
  } catch (e) {
    debug(e);
    ctx.throw(500, 'An error occurred downloading the dataset package.');
  }
});

router.get('/:id/download/gct', async (ctx) => {
  if (process.env.NODE_ENV !== 'production') {
    ctx.throw(400, 'GCT files can only be downloaded in production.');
  }
  try {
    let dataset = await Dataset.where('id', ctx.params.id).fetch();
    dataset = dataset.toJSON();
    let filename = `${dataset.lincsId}-${dataset.classification}-${dataset.method}.gct`;
    let filePath = `/usr/src/dist/files/datasets/${dataset.lincsId}.gct`;
    if (dataset.method === 'KINOMEScan') {
      filename = `${dataset.classification}-KINOMEScan.gct`;
      filePath = '/usr/src/dist/files/datasets/KINOMEScan.gct';
    } else if (dataset.method === 'KiNativ') {
      filename = `${dataset.classification}-KiNativ.gct`;
      filePath = '/usr/src/dist/files/datasets/KiNativ.gct';
    }
    ctx.set('Content-disposition', `attachment; filename=${filename}`);
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

router.get('/:id/download/gctx', async (ctx) => {
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
      // filePath = '/usr/src/dist/files/datasets/KINOMEScan.gctx';
      ctx.throw(400, 'GCTX file is not currently available for KINOMEScan.');
    } else if (dataset.method === 'KiNativ') {
      // filename = `${dataset.classification}-KiNativ.gctx`;
      // filePath = '/usr/src/dist/files/datasets/KiNativ.gctx';
      ctx.throw(400, 'GCTX file is not currently available for KiNativ.');
    }
    ctx.set('Content-disposition', `attachment; filename=${filename}`);
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
