/* eslint no-param-reassign:0 */
import { Dataset } from '../models';
import Router from 'koa-router';
import _debug from 'debug';
const debug = _debug('app:server:routes:datasets');

const router = new Router({
  prefix: '/api/v1/datasets',
});

function findOneDataset(opts) {
  const query = opts.query || {};
  const populate = opts.populate || true;
  const lean = opts.lean || true;
  return new Promise((resolve, reject) => {
    let chain = Dataset.findOne(query);
    if (populate) {
      chain = chain.populate(
        'cDNA cellLines genes iPSCs peptideProbes primaryCells proteins shRNA smallMolecules'
      );
    }
    if (lean) {
      chain = chain.lean();
    }
    chain
      .exec((err, datasets) => {
        if (err) {
          reject(err);
        } else {
          resolve(datasets);
        }
      });
  });
}

function findMultipleDatasets(opts) {
  const query = opts.query || {};
  const sortField = opts.sort || 'dateReleased';
  const limit = parseInt(opts.limit, 10) || 20;
  const populate = opts.populate || true;
  const lean = opts.lean || true;
  const page = parseInt(opts.page, 10) || 1;
  const skip = (page - 1) * limit;
  return new Promise((resolve, reject) => {
    let chain = Dataset.find(query).sort({ [sortField]: 'desc' }).limit(limit);
    if (populate) {
      chain = chain.populate(
        'cDNA cellLines genes iPSCs peptideProbes primaryCells proteins shRNA smallMolecules'
      );
    }
    if (lean) {
      chain = chain.lean();
    }
    chain
      .skip(skip)
      .exec((err, datasets) => {
        if (err) {
          reject(err);
        } else {
          resolve(datasets);
        }
      });
  });
}

router.get('/', async (ctx) => {
  try {
    ctx.body = await findMultipleDatasets(ctx.query);
  } catch (e) {
    debug(e);
    ctx.throw(500, 'An error occurred obtaining datasets.');
  }
});

router.get('/:id', async (ctx) => {
  try {
    ctx.body = await findOneDataset({ _id: ctx.params.id });
  } catch (e) {
    debug(e);
    ctx.throw(500, 'An error occurred obtaining datasets.');
  }
});

export default router;
