'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Workshops = exports.Workshop = undefined;

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var model = _base2.default.Model.extend({ tableName: 'workshops' });
var coll = _base2.default.Collection.extend({ model: model });

var Workshop = exports.Workshop = _base2.default.model('Workshop', model);
var Workshops = exports.Workshops = _base2.default.collection('Workshops', coll);