/* eslint no-param-reassign:0 */
import Router from 'koa-router';

import { FundingOpportunity } from '../models/FundingOpportunity';
import { Webinar } from '../models/Webinar';
import { Workshop } from '../models/Workshop';
import { Symposium } from '../models/Symposium';
import _debug from 'debug';
const debug = _debug('app:server:routes:community');

const router = new Router({
  prefix: '/LINCS/api/v1/community',
});

/**
 * Get all funding opportunities.
 */
router.get('/opportunities', async (ctx) => {
  try {
    const opps = await FundingOpportunity.forge().fetchAll();
    ctx.body = opps.toJSON();
  } catch (e) {
    debug(e);
    ctx.throw(500, 'An error occurred obtaining funding opportunities.');
  }
});

/**
 * Get all webinars.
 */
router.get('/webinars', async (ctx) => {
  try {
    const webinars = await Webinar.forge()
      .orderBy('date', 'desc')
      .fetchAll();
    ctx.body = webinars.toJSON();
  } catch (e) {
    debug(e);
    ctx.throw(500, 'An error occurred obtaining webinars.');
  }
});

/**
 * Get all workshops.
 */
router.get('/workshops', async (ctx) => {
  try {
    const shops = await Workshop.forge().fetchAll();
    ctx.body = shops.toJSON();
  } catch (e) {
    debug(e);
    ctx.throw(500, 'An error occurred obtaining workshops.');
  }
});

/**
 * Get all symposia.
 */
router.get('/symposia', async (ctx) => {
  try {
    const symposia = await Symposium.forge().fetchAll();
    ctx.body = symposia.toJSON();
  } catch (e) {
    debug(e);
    ctx.throw(500, 'An error occurred obtaining symposia.');
  }
});

export default router;
