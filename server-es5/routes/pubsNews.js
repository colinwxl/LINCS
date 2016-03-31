'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _Publication = require('../models/Publication');

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _debug2 = require('debug');

var _debug3 = _interopRequireDefault(_debug2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = (0, _debug3.default)('app:server:routes:pubsNews'); /* eslint no-param-reassign:0 */


var router = new _koaRouter2.default({
  prefix: '/LINCS/api/v1'
});

router.get('/publications', function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx) {
    var pubs;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Publication.Publication.forge().fetchAll({
              withRelated: ['authors']
            });

          case 3:
            pubs = _context.sent;

            ctx.body = pubs.toJSON();
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](0);

            debug(_context.t0);
            ctx.throw(500, 'An error occurred obtaining datasets.');

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 7]]);
  }));
  return function (_x) {
    return ref.apply(this, arguments);
  };
}());

// router.get('/news', async (ctx) => {
//   try {
//     const webinars = await Webinar.forge().fetchAll();
//     ctx.body = webinars.toJSON();
//   } catch (e) {
//     debug(e);
//     ctx.throw(500, 'An error occurred obtaining datasets.');
//   }
// });

exports.default = router;