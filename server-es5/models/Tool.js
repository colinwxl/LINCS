'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tools = exports.Tool = undefined;

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('./Center');
require('./Publication');
var model = _base2.default.Model.extend({
  tableName: 'tools',
  center: function center() {
    return this.belongsTo('Center');
  },
  publications: function publications() {
    return this.belongsToMany('Publication', 'tools_publications');
  }
});
var coll = _base2.default.Collection.extend({ model: model });

var Tool = exports.Tool = _base2.default.model('Tool', model);
var Tools = exports.Tools = _base2.default.collection('Tools', coll);