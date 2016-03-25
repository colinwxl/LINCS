'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Datasets = exports.Dataset = undefined;

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Require files to ensure they've been loaded for relationship with Bookshelf
require('./Cell');
require('./Tissue');
require('./SmallMolecule');
require('./Disease');
var model = _base2.default.Model.extend({
  tableName: 'datasets',
  // Relations
  cells: function cells() {
    return this.belongsToMany('Cell', 'cells_datasets');
  },
  tissues: function tissues() {
    return this.belongsToMany('Tissue', 'tissues_datasets');
  },
  smallMolecules: function smallMolecules() {
    return this.belongsToMany('SmallMolecule', 'small_molecules_datasets');
  },
  diseases: function diseases() {
    return this.belongsToMany('Disease', 'diseases_datasets');
  }
});

var coll = _base2.default.Collection.extend({ model: model });

var Dataset = exports.Dataset = _base2.default.model('Dataset', model);
var Datasets = exports.Datasets = _base2.default.collection('Datasets', coll);