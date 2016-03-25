'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaConvert = require('koa-convert');

var _koaConvert2 = _interopRequireDefault(_koaConvert);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpack3 = require('../build/webpack.config');

var _webpack4 = _interopRequireDefault(_webpack3);

var _webpackDev = require('./middleware/webpack-dev');

var _webpackDev2 = _interopRequireDefault(_webpackDev);

var _webpackHmr = require('./middleware/webpack-hmr');

var _webpackHmr2 = _interopRequireDefault(_webpackHmr);

var _koaConnectHistoryApiFallback = require('koa-connect-history-api-fallback');

var _koaConnectHistoryApiFallback2 = _interopRequireDefault(_koaConnectHistoryApiFallback);

var _koaMount = require('koa-mount');

var _koaMount2 = _interopRequireDefault(_koaMount);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _debug2 = require('debug');

var _debug3 = _interopRequireDefault(_debug2);

var _koaCors = require('koa-cors');

var _koaCors2 = _interopRequireDefault(_koaCors);

var _koaBodyparser = require('koa-bodyparser');

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _koaCompress = require('koa-compress');

var _koaCompress2 = _interopRequireDefault(_koaCompress);

var _koaLogger = require('koa-logger');

var _koaLogger2 = _interopRequireDefault(_koaLogger);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = (0, _debug3.default)('app:server');
var paths = _config2.default.utilsPaths;
var app = new _koa2.default();

app.use((0, _koaConvert2.default)((0, _koaCors2.default)()));
app.use((0, _koaConvert2.default)((0, _koaBodyparser2.default)()));
app.use((0, _koaConvert2.default)((0, _koaLogger2.default)()));
app.use((0, _koaConvert2.default)((0, _koaCompress2.default)()));

// Bootstrap routes
(0, _routes2.default)(app);

app.use((0, _koaConvert2.default)((0, _koaConnectHistoryApiFallback2.default)({ verbose: false })));

// ------------------------------------
// Apply Webpack HMR Middleware
// ------------------------------------
var compiler = (0, _webpack2.default)(_webpack4.default);

// Enable webpack-dev and webpack-hot middleware
var publicPath = _webpack4.default.output.publicPath;


app.use((0, _webpackDev2.default)(compiler, publicPath));
app.use((0, _webpackHmr2.default)(compiler));

// Static server - serve all files from static folder to /LINCS
var stat = new _koa2.default();
stat.use((0, _koaConvert2.default)((0, _koaStatic2.default)(paths.client('static'))));
app.use((0, _koaMount2.default)('/LINCS', stat));

app.listen(3000);
debug('App is running on port 3000.');