'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _boom = require('boom');

var _boom2 = _interopRequireDefault(_boom);

var _centers = require('./centers');

var _centers2 = _interopRequireDefault(_centers);

var _datasets = require('./datasets');

var _datasets2 = _interopRequireDefault(_datasets);

var _community = require('./community');

var _community2 = _interopRequireDefault(_community);

var _pubsNews = require('./pubsNews');

var _pubsNews2 = _interopRequireDefault(_pubsNews);

var _health = require('./health');

var _health2 = _interopRequireDefault(_health);

var _twitter = require('./twitter');

var _twitter2 = _interopRequireDefault(_twitter);

var _toolsWorkflows = require('./toolsWorkflows');

var _toolsWorkflows2 = _interopRequireDefault(_toolsWorkflows);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Load each koa-router instance within this folder and link it to the koa app.
 * This function is called from main.js to bootstrap the API.
 */

exports.default = function (app) {
  [_centers2.default, _datasets2.default, _community2.default, _pubsNews2.default, _health2.default, _twitter2.default, _toolsWorkflows2.default].forEach(function (router) {
    /* eslint new-cap:0 */
    app.use(router.routes()).use(router.allowedMethods({
      throw: true,
      notImplemented: function notImplemented() {
        return new _boom2.default.notImplemented();
      },
      methodNotAllowed: function methodNotAllowed() {
        return new _boom2.default.methodNotAllowed();
      }
    }));
  });
};