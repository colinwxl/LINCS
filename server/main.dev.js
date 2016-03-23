import Koa from 'koa';
import convert from 'koa-convert';
import webpack from 'webpack';
import webpackConfig from '../build/webpack.config';
import webpackDevMiddleware from './middleware/webpack-dev';
import webpackHMRMiddleware from './middleware/webpack-hmr';
import historyApiFallback from 'koa-connect-history-api-fallback';
import mount from 'koa-mount';
import serve from 'koa-static';
// import _debug from 'debug';
import cors from 'koa-cors';
import bodyParser from 'koa-bodyparser';
import compress from 'koa-compress';
import logger from 'koa-logger';
import config from '../config';
import makeRoutes from './routes';

// const debug = _debug('app:server');
const paths = config.utilsPaths;
const app = new Koa();

app.use(convert(cors()));
app.use(convert(bodyParser()));
app.use(convert(logger()));
app.use(convert(compress()));

// Bootstrap routes
makeRoutes(app);

app.use(convert(historyApiFallback({
  verbose: false,
})));

// ------------------------------------
// Apply Webpack HMR Middleware
// ------------------------------------
const compiler = webpack(webpackConfig);

// Enable webpack-dev and webpack-hot middleware
const { publicPath } = webpackConfig.output;

app.use(webpackDevMiddleware(compiler, publicPath));
app.use(webpackHMRMiddleware(compiler));

// Static server - serve all files from static folder to /LINCS
const stat = new Koa();
stat.use(convert(serve(paths.client('static'))));
app.use(mount('/LINCS', stat));

export default app;
