'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SmallMolecules = exports.SmallMolecule = undefined;

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Require file to ensure it's been loaded for relationship with Bookshelf
require('./Dataset');
var model = _base2.default.Model.extend({
  tableName: 'small_molecules',
  // Relations
  datasets: function datasets() {
    return this.belongsToMany('Dataset');
  }
});

var coll = _base2.default.Collection.extend({ model: model });

var SmallMolecule = exports.SmallMolecule = _base2.default.model('SmallMolecule', model);
var SmallMolecules = exports.SmallMolecules = _base2.default.collection('SmallMolecules', coll);