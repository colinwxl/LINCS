/* eslint no-param-reassign:0 */
import Router from 'koa-router';

import { knex } from '../serverConf';
import _debug from 'debug';
const debug = _debug('app:server:routes:health');

const router = new Router({
  prefix: '/LINCS/api/v1',
});

router.get('/health', async (ctx) => {
  try {
    await knex.raw('select 1+1 as result');
    ctx.body = 'Everything is just fine.';
  } catch (e) {
    debug(e);
    ctx.throw(500, 'Something is going terribly wrong.');
  }
});

export default router;
