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
    ctx.body = await FundingOpportunity.find({}).lean().exec();
  } catch (e) {
    debug(e);
    ctx.throw(500, 'An error occurred obtaining datasets.');
  }
});

router.get('/webinars', async (ctx) => {
  try {
    ctx.body = await Webinar.find({}).lean().exec();
  } catch (e) {
    debug(e);
    ctx.throw(500, 'An error occurred obtaining datasets.');
  }
});

router.get('/workshops', async (ctx) => {
  try {
    ctx.body = await Workshop.find({}).lean().exec();
  } catch (e) {
    debug(e);
    ctx.throw(500, 'An error occurred obtaining datasets.');
  }
});

router.get('/symposia', async (ctx) => {
  try {
    ctx.body = await Symposium.find({}).lean().exec();
  } catch (e) {
    debug(e);
    ctx.throw(500, 'An error occurred obtaining datasets.');
  }
});

export default router;
