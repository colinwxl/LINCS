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
  try {
    let datasets = await Dataset.fetchAll({
      withRelated: [
        'cells',
        'cells.synonyms',
        // 'smallMolecules',
      ],
    });
    datasets = datasets.toJSON({ omitPivot: !!ctx.query.omitPivot });
    ctx.body = datasets;
  } catch (e) {
    debug(e);
    ctx.throw(500, 'An error occurred obtaining datasets.');
  }
});

router.get('/:id', async (ctx) => {
  try {
    ctx.body = await Dataset.fetch({ id: ctx.params.id });
  } catch (e) {
    debug(e);
    ctx.throw(500, 'An error occurred obtaining datasets.');
  }
});

export default router;
