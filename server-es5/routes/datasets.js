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

var _debug2 = require('debug');

var _debug3 = _interopRequireDefault(_debug2);

var _Dataset = require('../models/Dataset');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint no-param-reassign:0 */

var debug = (0, _debug3.default)('app:server:routes:datasets');
// import omit from 'lodash/omit';

var router = new _koaRouter2.default({
  prefix: '/LINCS/api/v1/datasets'
});

router.get('/', function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx) {
    var datasets;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Dataset.Dataset.fetchAll({
              withRelated: ['cells', 'cells.synonyms']
            });

          case 3:
            datasets = _context.sent;

            // 'smallMolecules',

            datasets = datasets.toJSON({ omitPivot: !!ctx.query.omitPivot });
            ctx.body = datasets;
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context['catch'](0);

            debug(_context.t0);
            ctx.throw(500, 'An error occurred obtaining datasets.');

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

router.get('/:id', function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(ctx) {
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Dataset.Dataset.fetch({ id: ctx.params.id });

          case 3:
            ctx.body = _context2.sent;
            _context2.next = 10;
            break;

          case 6:
            _context2.prev = 6;
            _context2.t0 = _context2['catch'](0);

            debug(_context2.t0);
            ctx.throw(500, 'An error occurred obtaining datasets.');

          case 10:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[0, 6]]);
  }));
  return function (_x2) {
    return ref.apply(this, arguments);
  };
}());

exports.default = router;