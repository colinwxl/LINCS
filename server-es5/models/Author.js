'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Authors = exports.Author = undefined;

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('./Publication');
var model = _base2.default.Model.extend({
  tableName: 'authors',
  publications: function publications() {
    return this.belongsToMany('Publication', 'authors_publications');
  }
});
var coll = _base2.default.Collection.extend({ model: model });

var Author = exports.Author = _base2.default.model('Author', model);
var Authors = exports.Authors = _base2.default.collection('Authors', coll);