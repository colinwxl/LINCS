'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tissues = exports.Tissue = undefined;

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Require file to ensure it's been loaded for relationship with Bookshelf
require('./Cell');
var model = _base2.default.Model.extend({
  tableName: 'tissues',
  // Relations
  cells: function cells() {
    return this.belongsToMany('Cell', 'cells_tissues');
  }
});

var coll = _base2.default.Collection.extend({ model: model });

var Tissue = exports.Tissue = _base2.default.model('Tissue', model);
var Tissues = exports.Tissues = _base2.default.collection('Tissues', coll);