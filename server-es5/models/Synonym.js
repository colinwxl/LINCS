'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Synonyms = exports.Synonym = undefined;

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Require file to ensure it's been loaded for relationship with Bookshelf
require('./Cell');
var model = _base2.default.Model.extend({
  tableName: 'synonyms',
  // Relations
  cell: function cell() {
    return this.belongsTo('Cell');
  }
});

var coll = _base2.default.Collection.extend({ model: model });

var Synonym = exports.Synonym = _base2.default.model('Synonym', model);
var Synonyms = exports.Synonyms = _base2.default.collection('Synonyms', coll);