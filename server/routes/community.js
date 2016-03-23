/* eslint no-param-reassign:0 */
import {
  FundingOpportunity,
  Webinar,
  Workshop,
  Symposium,
} from '../models';
import Router from 'koa-router';
import _debug from 'debug';
const debug = _debug('app:server:routes:community');

const router = new Router({
  prefix: '/LINCS/api/v1/community',
});

router.get('/opportunities', async (ctx) => {
  try {
    ctx.body = await FundingOpportunity.fetchAll();
  } catch (e) {
    debug(e);
    ctx.throw(500, 'An error occurred obtaining datasets.');
  }
});

router.get('/webinars', async (ctx) => {
  try {
    const webinars = await Webinar.fetchAll();
    ctx.body = webinars.toJSON();
  } catch (e) {
    debug(e);
    ctx.throw(500, 'An error occurred obtaining datasets.');
  }
});

router.get('/workshops', async (ctx) => {
  try {
    ctx.body = await Workshop.fetchAll();
  } catch (e) {
    debug(e);
    ctx.throw(500, 'An error occurred obtaining datasets.');
  }
});

router.get('/symposia', async (ctx) => {
  try {
    ctx.body = await Symposium.fetchAll();
  } catch (e) {
    debug(e);
    ctx.throw(500, 'An error occurred obtaining datasets.');
  }
});

export default router;
