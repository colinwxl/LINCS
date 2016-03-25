'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _FundingOpportunity = require('../models/FundingOpportunity');

var _Webinar = require('../models/Webinar');

var _Workshop = require('../models/Workshop');

var _Symposium = require('../models/Symposium');

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _debug2 = require('debug');

var _debug3 = _interopRequireDefault(_debug2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint no-param-reassign:0 */

var debug = (0, _debug3.default)('app:server:routes:community');

var router = new _koaRouter2.default({
  prefix: '/LINCS/api/v1/community'
});

router.get('/opportunities', function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx) {
    var opps;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _FundingOpportunity.FundingOpportunity.forge().fetchAll();

          case 3:
            opps = _context.sent;

            ctx.body = opps.toJSON();
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
  })),
      _this = undefined;
  return function (_x) {
    return ref.apply(_this, arguments);
  };
}());

router.get('/webinars', function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(ctx) {
    var webinars;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Webinar.Webinar.forge().fetchAll();

          case 3:
            webinars = _context2.sent;

            ctx.body = webinars.toJSON();
            _context2.next = 11;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2['catch'](0);

            debug(_context2.t0);
            ctx.throw(500, 'An error occurred obtaining datasets.');

          case 11:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[0, 7]]);
  })),
      _this = undefined;
  return function (_x2) {
    return ref.apply(_this, arguments);
  };
}());

router.get('/workshops', function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(ctx) {
    var shops;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _Workshop.Workshop.forge().fetchAll();

          case 3:
            shops = _context3.sent;

            ctx.body = shops.toJSON();
            _context3.next = 11;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3['catch'](0);

            debug(_context3.t0);
            ctx.throw(500, 'An error occurred obtaining datasets.');

          case 11:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined, [[0, 7]]);
  })),
      _this = undefined;
  return function (_x3) {
    return ref.apply(_this, arguments);
  };
}());

router.get('/symposia', function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(ctx) {
    var symposia;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _Symposium.Symposium.forge().fetchAll();

          case 3:
            symposia = _context4.sent;

            ctx.body = symposia.toJSON();
            _context4.next = 11;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4['catch'](0);

            debug(_context4.t0);
            ctx.throw(500, 'An error occurred obtaining datasets.');

          case 11:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, undefined, [[0, 7]]);
  })),
      _this = undefined;
  return function (_x4) {
    return ref.apply(_this, arguments);
  };
}());

exports.default = router;