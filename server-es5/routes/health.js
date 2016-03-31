'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _serverConf = require('../serverConf');

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _debug2 = require('debug');

var _debug3 = _interopRequireDefault(_debug2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = (0, _debug3.default)('app:server:routes:health'); /* eslint no-param-reassign:0 */


var router = new _koaRouter2.default({
  prefix: '/LINCS/api/v1'
});

router.get('/health', function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx) {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _serverConf.knex.raw('select 1+1 as result');

          case 3:
            ctx.body = 'Everything is just fine.';
            _context.next = 10;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context['catch'](0);

            debug(_context.t0);
            ctx.throw(500, 'Something is going terribly wrong.');

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 6]]);
  }));
  return function (_x) {
    return ref.apply(this, arguments);
  };
}());

exports.default = router;