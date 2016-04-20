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
    const tools = await Tool.query(qb => qb.select().orderBy('order', 'asc')).fetchAll();
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

router.post('/workflows/add', async (ctx) => {
  const workflow = ctx.request.body;
  if (!Object.keys(workflow).length) {
    ctx.throw(400, 'Workflow not sent with request.');
  }
  if (!workflow.type) {
    ctx.throw(400, 'Workflow requires a type');
  }
  try {
    const wf = await Workflow.forge(workflow).save().then(wfModel => wfModel.toJSON());
    ctx.body = wf;
  } catch (e) {
    debug(e);
    ctx.throw(500, 'An error occurred adding workflow.');
  }
});

export default router;
