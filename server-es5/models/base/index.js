'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _bookshelf = require('bookshelf');

var _bookshelf2 = _interopRequireDefault(_bookshelf);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _serverConf = require('../../serverConf');

var _pagination = require('./pagination');

var _pagination2 = _interopRequireDefault(_pagination);

var _schema = require('../../data/schema');

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lincsBookshelf = (0, _bookshelf2.default)(_serverConf.knex);

lincsBookshelf.plugin('registry');
lincsBookshelf.plugin(_pagination2.default);

lincsBookshelf.Model = lincsBookshelf.Model.extend({
  hasTimestamps: true,
  permittedAttributes: function permittedAttributes() {
    return _lodash2.default.keys(_schema2.default[this.tableName]);
  },

  // defaults: () => ({}),
  snakeCase: function snakeCase(attributes) {
    var self = this;
    var attrs = {};
    _lodash2.default.each(attributes, function (value, key) {
      if (_schema2.default[self.tableName].hasOwnProperty(key)) {
        attrs[_lodash2.default.snakeCase(key)] = value;
      }
    });
    return attrs;
  },
  camelCase: function camelCase(attributes) {
    var self = this;
    var attrs = {};
    _lodash2.default.each(attributes, function (value, key) {
      if (_schema2.default[self.tableName].hasOwnProperty(key)) {
        attrs[_lodash2.default.camelCase(key)] = value;
      }
    });
    return attrs;
  },
  stringifyObjects: function stringifyObjects(attributes) {
    var self = this;
    var attrs = attributes;
    _lodash2.default.each(attrs, function (value, key) {
      if (_schema2.default[self.tableName].hasOwnProperty(key) && !!_schema2.default[self.tableName][key].isJson && _lodash2.default.isObject(value)) {
        attrs[key] = (0, _stringify2.default)(value);
      }
    });
    return attrs;
  },
  stringsToObjects: function stringsToObjects(attributes) {
    var self = this;
    var attrs = attributes;
    _lodash2.default.each(attrs, function (value, key) {
      if (_schema2.default[self.tableName].hasOwnProperty(key)) {
        try {
          attrs[key] = JSON.parse(value);
        } catch (e) {
          attrs[key] = value;
        }
      }
    });
    return attrs;
  },
  fixBools: function fixBools(attributes) {
    var self = this;
    var attrs = attributes;
    _lodash2.default.each(attrs, function (value, key) {
      if (_schema2.default[self.tableName].hasOwnProperty(key) && _schema2.default[self.tableName][key].type === 'bool') {
        attrs[key] = !!value;
      }
    });
    return attrs;
  },
  fixDates: function fixDates(attributes) {
    var self = this;
    var attrs = attributes;
    _lodash2.default.each(attrs, function (value, key) {
      if (value !== null && _schema2.default[self.tableName].hasOwnProperty(key) && _schema2.default[self.tableName][key].type === 'dateTime') {
        // convert dateTime value into a native javascript Date object
        if (value.indexOf && value.indexOf('/') !== -1) {
          attrs[key] = (0, _moment2.default)(value, 'MM/DD/YYYY').toDate();
        } else {
          attrs[key] = (0, _moment2.default)(value).toDate();
        }
      }
    });
    return attrs;
  },
  format: function format(attributes) {
    var attrs = attributes;
    attrs = this.snakeCase(attrs);
    attrs = this.stringifyObjects(attrs);
    attrs = this.fixDates(attrs);
    return attrs;
  },
  parse: function parse(attributes) {
    var attrs = attributes;
    attrs = this.stringsToObjects(attrs);
    attrs = this.camelCase(attrs);
    attrs = this.fixDates(attrs);
    attrs = this.fixBools(attrs);
    return attrs;
  }
});

exports.default = lincsBookshelf;