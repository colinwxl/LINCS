'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _camelize = require('camelize');

var _camelize2 = _interopRequireDefault(_camelize);

var _serverConf = require('../serverConf');

var _debug2 = require('debug');

var _debug3 = _interopRequireDefault(_debug2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint no-param-reassign:0 */

var debug = (0, _debug3.default)('app:server:routes:twitter');

var router = new _koaRouter2.default({
  prefix: '/LINCS/api/v1/twitter'
});

/**
 * Uses the {@link https://github.com/ttezel/twit#usage Twit API} to get the LINCSProgram
 * twitter timeline. Camelizes the response and sends it.
 */
router.get('/timeline', function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx) {
    var opts, response;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            opts = { screen_name: 'LINCSProgram', count: 20 };
            _context.next = 4;
            return _serverConf.Twit.get('statuses/user_timeline', opts);

          case 4:
            response = _context.sent;

            ctx.body = (0, _camelize2.default)(response.data);
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context['catch'](0);

            debug(_context.t0);
            ctx.throw(500, 'An error occurred obtaining tweets.');

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 8]]);
  }));
  return function (_x) {
    return ref.apply(this, arguments);
  };
}());

// LINCS List
//
// router.get('/timeline', async (ctx) => {
//   try {
//     const opts = { slug: 'LINCS', owner_screen_name: 'BD2KLINCSDCIC', count: 20 };
//     const response = await Twit.get('lists/statuses', opts);
//     ctx.body = camelize(response.data);
//   } catch (e) {
//     debug(e);
//     ctx.throw(500, 'An error occurred obtaining tweets.');
//   }
// });

exports.default = router;