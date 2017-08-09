/* eslint no-param-reassign:0 */
import Router from 'koa-router';
import { Announcements } from '../models/Announcements';
import _debug from 'debug';
const debug = _debug('app:server:routes:pubsNews');

const router = new Router({
  prefix: '/LINCS/api/v1',
});

router.get('/announcements', async (ctx) => {
  try {
    const announcements = await Announcements.forge()
      .orderBy('event_date', 'desc')
      .fetchAll();
    ctx.body = announcements.toJSON();
  } catch (e) {
    debug(e);
    ctx.throw(500, 'An error occurred obtaining announcements.');
  }
});

export default router;
