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

var _schema = require('../../data/schema');

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import camelize from 'camelize';

var lincsBookshelf = (0, _bookshelf2.default)(_serverConf.knex); // # Base Model
// This is the model from which all other LINCS models extend. The model is based
// on Bookshelf.Model, and provides several basic behaviours, as well as a set of
// Data methods for accessing information from the database.
//
// This file is based off of the similar base model in the Ghost source code:
// https://github.com/TryGhost/Ghost/blob/master/core/server/models/base/index.js

lincsBookshelf.plugin('registry');

lincsBookshelf.Model = lincsBookshelf.Model.extend({
  hasTimestamps: true,
  /**
   * This function returns the permittedAttributes for the model. Ensures that no keys
   * are added to the database if they don't exist in the schema.
   * @return {Array} The keys permitted for the current lincsBookshelf Model.
   */
  permittedAttributes: function permittedAttributes() {
    return _lodash2.default.keys(_schema2.default[this.tableName]);
  },

  /**
   * This function takes a list of attributes (keys) and converts them all
   * to snake_case. Used to convert all keys to snake_case before being inserted
   * into the database.
   * @param  {Object} attributes An object that will be inserted into the database.
   * @return {Object}            The same attributes, with snake_case keys.
   */
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

  /**
   * This function takes a list of attributes (keys) and converts them all
   * to camelCase. Used to convert all keys to camelCase before being returned from the db.
   * @param  {Object} attributes An object that will be returned from the database.
   * @return {Object}            The same attributes, with camelCase keys.
   */
  camelCase: function camelCase(attributes) {
    var self = this;
    var attrs = {};
    _lodash2.default.each(attributes, function (value, key) {
      // Need to duplicate keys like 'center_id' due to the following issue and
      // StackOverflow question:
      // https://github.com/tgriesser/bookshelf/issues/1212
      // http://stackoverflow.com/questions/36875411/fetching-model-with-one-many-relationship-and-parse
      if (key.indexOf('_id') !== -1) {
        attrs[key] = value;
      }
      if (_schema2.default[self.tableName].hasOwnProperty(key)) {
        attrs[_lodash2.default.camelCase(key)] = value;
      }
    });
    return attrs;
  },

  /**
   * This function allows JSON objects to be stored in the MySQL database as strings.
   * Iterates over the attributes, if they are meant to be stringified, turn the JSON objects
   * into strings before inserting them in the database.
   * @param  {Object} attributes An object that will be inserted into the database.
   * @return {Object}            The same attributes, with stringified objects.
   */
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

  /**
   * This function allows JSON objects to be stored in the MySQL database as strings.
   * Iterates over the attributes, if they are meant to be turned into JSON objects,
   * then parse the strings before fetching them from the database.
   * @param  {Object} attributes An object that will be returned from the database.
   * @return {Object}            The same attributes, with actual JSON objects instead
   * of stringified objects.
   */
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

  /**
   * This function takes a list of attributes (keys) and converts all of the attributes
   * that should be booleans to actual booleans. Instead of 0, 1, etc, they're converted to
   * true/false.
   * @param  {Object} attributes An object that will be returned from the database.
   * @return {Object}            The same attributes, with proper booleans.
   */
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

  /**
   * This function takes a list of attributes (keys) and converts all of the attributes
   * that should be dates to actual JavaScript Date objects.
   * @param  {Object} attributes An object that will be returned from the database.
   * @return {Object}            The same attributes, with proper Date objects.
   */
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

  /**
   * This function calls the model's methods required to properly format the attributes
   * before being inserted from the database.
   * @param  {Object} attributes An object that will be inserted into the database.
   * @return {Object}            The same attributes, with formatted keys for insertion
   * into the database
   */
  format: function format(attributes) {
    var attrs = attributes;
    attrs = this.snakeCase(attrs);
    attrs = this.stringifyObjects(attrs);
    attrs = this.fixDates(attrs);
    return attrs;
  },

  /**
   * This function calls the model's methods required to properly format the attributes
   * before being returned from the database.
   * @param  {Object} attributes An object that will be retrieved from the database.
   * @return {Object}            The same attributes, with formatted keys for retrieval
   * from the database
   */
  parse: function parse(attributes) {
    var attrs = attributes;
    attrs = this.stringsToObjects(attrs);
    attrs = this.fixDates(attrs);
    attrs = this.fixBools(attrs);
    attrs = this.camelCase(attrs);
    return attrs;
  }
});

exports.default = lincsBookshelf;