/* eslint no-param-reassign:0 */
import Router from 'koa-router';
import { CannedAnalyses } from '../models/CannedAnalyses';
import _debug from 'debug';
const debug = _debug('app:server:routes:cannedanalyses');

const router = new Router({
  prefix: '/LINCS/api/v1',
});

router.get('/cannedanalyses', async (ctx) => {
  try {
    const cannedAnalyses = await CannedAnalyses.forge()
      .fetchAll();
    ctx.body = cannedAnalyses.toJSON();
  } catch (e) {
    debug(e);
    ctx.throw(500, 'An error occurred obtaining cannedAnalyses.');
  }
});

export default router;
