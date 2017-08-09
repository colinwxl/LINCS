/* eslint no-param-reassign:0 */
import Router from 'koa-router';
import { CannedAnalyses } from '../models/CannedAnalysis';
import _debug from 'debug';
const debug = _debug('app:server:routes:cannedanalyses');

const router = new Router({
  prefix: '/LINCS/api/v1',
});

router.get('/cannedanalyses', async (ctx) => {
  try {
    const cannedAnalyses = await CannedAnalyses
      .query(qb => qb.select())
      .fetch();
    ctx.body = cannedAnalyses.toJSON({ omitPivot: true });
  } catch (e) {
    debug(e);
    ctx.throw(500, 'An error occurred obtaining canned analyses.');
  }
});

router.post('/cannedanalyses/clicks/increment', async (ctx) => {
  const cannedAnalysesIds = ctx.request.body.cannedAnalysesIds;
  if (!cannedAnalysesIds || !cannedAnalysesIds.length) {
    ctx.throw(400, 'Canned Analysis Id required with request.');
    return;
  }
  try {
    const cannedAnalysesModels = await CannedAnalyses
      .query(qb => qb.whereIn('id', cannedAnalysesIds))
      .fetch();

      ctx.body = await Promise.all(
        cannedAnalysesModels.map(model => {
          let clicks = model.get('clicks');
          return model
            .save({ clicks: ++clicks }, { patch: true, required: true })
            .then(newModel => newModel.toJSON());
        })
      );
  } catch (e) {
    debug(e);
    ctx.throw(500, 'An error occurred obtaining canned analyses.');
  }
});

export default router;
