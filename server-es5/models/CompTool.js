'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompTools = exports.CompTool = undefined;

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('./Publication');
var model = _base2.default.Model.extend({
  tableName: 'comp_tools',
  publications: function publications() {
    return this.belongsToMany('Publication', 'comp_tools_publications');
  }
});
var coll = _base2.default.Collection.extend({ model: model });

var CompTool = exports.CompTool = _base2.default.model('CompTool', model);
var CompTools = exports.CompTools = _base2.default.collection('CompTools', coll);