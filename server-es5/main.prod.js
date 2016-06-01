'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaConnectHistoryApiFallback = require('koa-connect-history-api-fallback');

var _koaConnectHistoryApiFallback2 = _interopRequireDefault(_koaConnectHistoryApiFallback);

var _koaConvert = require('koa-convert');

var _koaConvert2 = _interopRequireDefault(_koaConvert);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _koaMount = require('koa-mount');

var _koaMount2 = _interopRequireDefault(_koaMount);

var _koaCors = require('koa-cors');

var _koaCors2 = _interopRequireDefault(_koaCors);

var _koaBodyparser = require('koa-bodyparser');

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _koaCompress = require('koa-compress');

var _koaCompress2 = _interopRequireDefault(_koaCompress);

var _koaLogger = require('koa-logger');

var _koaLogger2 = _interopRequireDefault(_koaLogger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint no-console:0 */


var app = new _koa2.default();

app.use((0, _koaConvert2.default)((0, _koaCors2.default)()));
app.use((0, _koaConvert2.default)((0, _koaBodyparser2.default)()));
app.use((0, _koaConvert2.default)((0, _koaLogger2.default)()));
app.use((0, _koaConvert2.default)((0, _koaCompress2.default)()));

// Require routes
require('./routes').default(app);

app.use((0, _koaConvert2.default)((0, _koaConnectHistoryApiFallback2.default)({
  index: '/LINCS/index.html',
  verbose: true
})));

// Static server - serve all files from static folder to /LINCS
var stat = new _koa2.default();
console.log('Serving static files from:', _path2.default.join(__dirname, 'dist'));
stat.use((0, _koaConvert2.default)((0, _koaStatic2.default)(_path2.default.join(__dirname, 'dist'))));
app.use((0, _koaMount2.default)('/LINCS', stat));

app.listen(3000);
console.log('App is listening on port 3000.');