/* eslint no-param-reassign:0 */
import Router from 'koa-router';
import { Centers } from '../models/Center';
import _debug from 'debug';
const debug = _debug('app:server:routes:health');

const router = new Router({
  prefix: '/LINCS/api/v1/centers',
});

/**
 * Get all centers with their tools and datasets.
 */
router.get('/', async (ctx) => {
  try {
    const centers = await Centers
      .forge()
      .fetch({
        withRelated: [
          'tools',
          { datasets: (query) => query.orderBy('date_released', 'desc') },
        ],
      });
    ctx.body = centers.toJSON();
  } catch (e) {
    debug(e);
    ctx.throw(500, 'An error occurred obtaining tools.');
  }
});

export default router;
