/* eslint no-param-reassign:0 */
import { Publication } from '../models/Publication';
import Router from 'koa-router';
import _debug from 'debug';
const debug = _debug('app:server:routes:pubsNews');

const router = new Router({
  prefix: '/LINCS/api/v1',
});

router.get('/publications', async (ctx) => {
  try {
    const pubs = await Publication.forge().fetchAll({
      withRelated: [
        'authors',
      ],
    });
    // Omit pivot by default
    const includePivot = !!ctx.query.includePivot;
    ctx.body = pubs.toJSON({ omitPivot: !includePivot });
  } catch (e) {
    debug(e);
    ctx.throw(500, 'An error occurred obtaining datasets.');
  }
});

// News need to exist in database first
router.get('/news', async (ctx) => {
  ctx.body = [];
});

export default router;
