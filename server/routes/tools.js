/* eslint no-param-reassign:0 */
import Router from 'koa-router';

import { Tool } from '../models/Tool';
import _debug from 'debug';
const debug = _debug('app:server:routes:health');

const router = new Router({
  prefix: '/LINCS/api/v1/tools',
});

router.get('/', async (ctx) => {
  try {
    const tools = await Tool.fetchAll();
    ctx.body = tools.toJSON();
  } catch (e) {
    debug(e);
    ctx.throw(500, 'An error occurred obtaining tools.');
  }
});

export default router;
