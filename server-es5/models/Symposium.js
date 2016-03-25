'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Symposia = exports.Symposium = undefined;

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var model = _base2.default.Model.extend({ tableName: 'symposia' });
var coll = _base2.default.Collection.extend({ model: model });

var Symposium = exports.Symposium = _base2.default.model('Symposium', model);
var Symposia = exports.Symposia = _base2.default.collection('Symposia', coll);