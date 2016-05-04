import Boom from 'boom';

import centers from './centers';
import ds from './datasets';
import comm from './community';
import pn from './pubsNews';
import health from './health';
import twitter from './twitter';
import tw from './toolsWorkflows';

/**
 * Load each koa-router instance within this folder and link it to the koa app.
 * This function is called from main.js to bootstrap the API.
 */
export default (app) => {
  [centers, ds, comm, pn, health, twitter, tw].forEach(router => {
    /* eslint new-cap:0 */
    app
    .use(router.routes())
    .use(router.allowedMethods({
      throw: true,
      notImplemented: () => new Boom.notImplemented(),
      methodNotAllowed: () => new Boom.methodNotAllowed(),
    }));
  });
};
