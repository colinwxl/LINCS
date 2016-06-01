'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Centers = exports.Center = undefined;

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Require file to ensure it's been loaded for relationship with Bookshelf
require('./Dataset');
require('./Tool');
var model = _base2.default.Model.extend({
  tableName: 'centers',
  // Relations
  datasets: function datasets() {
    return this.hasMany('Dataset');
  },
  tools: function tools() {
    return this.hasMany('Tool');
  }
});

var coll = _base2.default.Collection.extend({ model: model });

var Center = exports.Center = _base2.default.model('Center', model);
var Centers = exports.Centers = _base2.default.collection('Centers', coll);