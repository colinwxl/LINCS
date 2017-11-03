/* eslint no-param-reassign:0 */
import Router from 'koa-router';
import { Citations } from '../models/Citations';
import _debug from 'debug';
const debug = _debug('app:server:routes:citations');

const router = new Router({
  prefix: '/LINCS/api/v1',
});

router.get('/citations', async (ctx) => {
  try {
    const citations = await Citations
      .fetchAll();
     ctx.body = citations.toJSON();
  } catch (e) {
    debug(e);
    ctx.throw(500, 'An error occurred obtaining citations.');
  }
});

export default router;
