import Boom from 'boom';

import ds from './datasets';
import comm from './community';
import pn from './pubsNews';
import health from './health';
import twitter from './twitter';
import tools from './tools';

export default (app) => {
  [ds, comm, pn, health, twitter, tools].forEach(router => {
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
