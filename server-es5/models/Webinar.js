'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Webinars = exports.Webinar = undefined;

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var model = _base2.default.Model.extend({ tableName: 'webinars' });
var coll = _base2.default.Collection.extend({ model: model });

var Webinar = exports.Webinar = _base2.default.model('Webinar', model);
var Webinars = exports.Webinars = _base2.default.collection('Webinars', coll);