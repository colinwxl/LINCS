/* eslint no-param-reassign:0 */
import Router from 'koa-router';
import camelize from 'camelize';

import { Twit } from '../serverConf';
import _debug from 'debug';
const debug = _debug('app:server:routes:twitter');

const router = new Router({
  prefix: '/LINCS/api/v1/twitter',
});

/**
 * Uses the {@link https://github.com/ttezel/twit#usage Twit API} to get the LINCSProgram
 * twitter timeline. Camelizes the response and sends it.
 */
router.get('/timeline', async (ctx) => {
  try {
    const opts = { screen_name: 'LINCSProgram', count: 20 };
    const response = await Twit.get('statuses/user_timeline', opts);
    ctx.body = camelize(response.data);
  } catch (e) {
    debug(e);
    ctx.throw(500, 'An error occurred obtaining tweets.');
  }
});

// LINCS List
//
// router.get('/timeline', async (ctx) => {
//   try {
//     const opts = { slug: 'LINCS', owner_screen_name: 'BD2KLINCSDCIC', count: 20 };
//     const response = await Twit.get('lists/statuses', opts);
//     ctx.body = camelize(response.data);
//   } catch (e) {
//     debug(e);
//     ctx.throw(500, 'An error occurred obtaining tweets.');
//   }
// });

export default router;
