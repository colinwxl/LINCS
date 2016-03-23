import Boom from 'boom';

// import dsRouter from './datasets';
import communityRouter from './community';

export default (app) => {
  [communityRouter].forEach(router => {
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
