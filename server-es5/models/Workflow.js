'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Workflows = exports.Workflow = undefined;

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('./Publication');
var model = _base2.default.Model.extend({
  tableName: 'workflows'
});
var coll = _base2.default.Collection.extend({ model: model });

var Workflow = exports.Workflow = _base2.default.model('Workflow', model);
var Workflows = exports.Workflows = _base2.default.collection('Workflows', coll);