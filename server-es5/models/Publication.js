'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Publications = exports.Publication = undefined;

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('./Author');
require('./CompTool');
var model = _base2.default.Model.extend({
  tableName: 'publications',
  authors: function authors() {
    return this.belongsToMany('Author', 'authors_publications');
  },
  compTools: function compTools() {
    return this.belongsToMany('CompTool', 'comp_tools_publications');
  }
});
var coll = _base2.default.Collection.extend({ model: model });

var Publication = exports.Publication = _base2.default.model('Publication', model);
var Publications = exports.Publications = _base2.default.collection('Publications', coll);