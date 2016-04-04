/* eslint no-param-reassign:0 */
import Router from 'koa-router';
// import omit from 'lodash/omit';

import _debug from 'debug';
const debug = _debug('app:server:routes:datasets');

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
    let datasets = await Dataset.fetchAll({
      withRelated,
    });
    // Omit pivot by default
    const includePivot = !!ctx.query.includePivot;
    datasets = datasets.toJSON({ omitPivot: !includePivot });
    ctx.body = datasets;
  } catch (e) {
    debug(e);
    ctx.throw(500, 'An error occurred obtaining datasets.');
  }
});

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

export default router;
