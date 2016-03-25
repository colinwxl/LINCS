/* eslint no-param-reassign:0 */
import { Dataset } from '../models/Dataset';
import Router from 'koa-router';
import _debug from 'debug';
const debug = _debug('app:server:routes:datasets');

const router = new Router({
  prefix: '/LINCS/api/v1/datasets',
});

router.get('/', async (ctx) => {
  try {
    ctx.body = await Dataset.fetchAll({
      withRelated: [
        'cells',
        'tissues',
        'smallMolecules',
        'diseases',
      ],
    });
  } catch (e) {
    debug(e);
    ctx.throw(500, 'An error occurred obtaining datasets.');
  }
});

router.get('/:id', async (ctx) => {
  try {
    ctx.body = await Dataset.fetch({ id: ctx.params.id });
  } catch (e) {
    debug(e);
    ctx.throw(500, 'An error occurred obtaining datasets.');
  }
});

export default router;
