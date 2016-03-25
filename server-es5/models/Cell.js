'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cells = exports.Cell = undefined;

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Require file to ensure it's been loaded for relationship with Bookshelf
require('./Dataset');
var model = _base2.default.Model.extend({
  tableName: 'cells',
  // Relations
  datasets: function datasets() {
    return this.belongsToMany('Dataset');
  }
});

var coll = _base2.default.Collection.extend({ model: model });

var Cell = exports.Cell = _base2.default.model('Cell', model);
var Cells = exports.Cells = _base2.default.collection('Cells', coll);