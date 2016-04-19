/* eslint no-param-reassign:0 */
import Router from 'koa-router';

import { Tool } from '../models/Tool';
import { Workflow } from '../models/Workflow';
import _debug from 'debug';
const debug = _debug('app:server:routes:health');

const router = new Router({
  prefix: '/LINCS/api/v1',
});

router.get('/tools', async (ctx) => {
  try {
    const tools = await Tool.fetchAll();
    ctx.body = tools.toJSON();
  } catch (e) {
    debug(e);
    ctx.throw(500, 'An error occurred obtaining tools.');
  }
});

router.get('/workflows', async (ctx) => {
  try {
    const workflows = await Workflow.fetchAll();
    ctx.body = workflows.toJSON();
  } catch (e) {
    debug(e);
    ctx.throw(500, 'An error occurred obtaining workflows.');
  }
});

export default router;
