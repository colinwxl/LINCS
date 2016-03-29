import webpackDevMiddleware from 'webpack-dev-middleware';
import applyExpressMiddleware from '../lib/apply-express-middleware';
import _debug from 'debug';
import config from '../../config';

const paths = config.utilsPaths;
const debug = _debug('app:server:webpack-dev');

export default function (compiler, publicPath) {
  debug('Enable Webpack Dev Middleware.');

  const middleware = webpackDevMiddleware(compiler, {
    publicPath,
    contentBase: paths.base(config.dirClient),
    hot: true,
    quiet: config.compilerQuiet,
    noInfo: config.compilerQuiet,
    lazy: false,
    stats: config.compilerStats,
  });

  return async function koaWebpackDevMiddleware(ctx, next) {
    /* eslint-disable */
    let hasNext = await applyExpressMiddleware(middleware, ctx.req, {
      end: (content) => (ctx.body = content),
      setHeader: function setHeader() {
        ctx.set.apply(ctx, arguments);
      },
    });

    if (hasNext) {
      await next();
    }
  };
}
