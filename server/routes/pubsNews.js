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
    const opps = await Publication.forge().fetchAll();
    ctx.body = opps.toJSON();
  } catch (e) {
    debug(e);
    ctx.throw(500, 'An error occurred obtaining datasets.');
  }
});

// router.get('/news', async (ctx) => {
//   try {
//     const webinars = await Webinar.forge().fetchAll();
//     ctx.body = webinars.toJSON();
//   } catch (e) {
//     debug(e);
//     ctx.throw(500, 'An error occurred obtaining datasets.');
//   }
// });

export default router;
