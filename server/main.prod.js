/* eslint no-console:0 */
import path from 'path';
import Koa from 'koa';
import historyApiFallback from 'koa-connect-history-api-fallback';
import convert from 'koa-convert';
import serve from 'koa-static';
import mount from 'koa-mount';
import cors from 'koa-cors';
import bodyParser from 'koa-bodyparser';
import compress from 'koa-compress';
import logger from 'koa-logger';

const app = new Koa();

app.use(convert(cors()));
app.use(convert(bodyParser()));
app.use(convert(logger()));
app.use(convert(compress()));

// Require routes
require('./routes').default(app);

app.use(convert(historyApiFallback({
  index: '/LINCS/index.html',
  verbose: true,
})));

// Static server - serve all files from static folder to /LINCS
const stat = new Koa();
console.log('Serving static files from:', path.join(__dirname, ''));
stat.use(convert(serve(path.join(__dirname, ''))));
app.use(mount('/LINCS', stat));

app.listen(3000);
console.log('App is listening on port 3000.');
