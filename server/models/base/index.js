// # Base Model
// This is the model from which all other LINCS models extend. The model is based
// on Bookshelf.Model, and provides several basic behaviours, as well as a set of
// Data methods for accessing information from the database.
//
// This file is based off of the similar base model in the Ghost source code:
// https://github.com/TryGhost/Ghost/blob/master/core/server/models/base/index.js

import bookshelf from 'bookshelf';
import moment from 'moment';
import _ from 'lodash';
// import camelize from 'camelize';

import { knex } from '../../serverConf';
import schema from '../../data/schema';

const lincsBookshelf = bookshelf(knex);
lincsBookshelf.plugin('registry');

lincsBookshelf.Model = lincsBookshelf.Model.extend({
  hasTimestamps: true,
  /**
   * This function returns the permittedAttributes for the model. Ensures that no keys
   * are added to the database if they don't exist in the schema.
   * @return {Array} The keys permitted for the current lincsBookshelf Model.
   */
  permittedAttributes() {
    return _.keys(schema[this.tableName]);
  },
  /**
   * This function takes a list of attributes (keys) and converts them all
   * to snake_case. Used to convert all keys to snake_case before being inserted
   * into the database.
   * @param  {Object} attributes An object that will be inserted into the database.
   * @return {Object}            The same attributes, with snake_case keys.
   */
  snakeCase(attributes) {
    const self = this;
    const attrs = {};
    _.each(attributes, (value, key) => {
      if (schema[self.tableName].hasOwnProperty(key)) {
        attrs[_.snakeCase(key)] = value;
      }
    });
    return attrs;
  },
  /**
   * This function takes a list of attributes (keys) and converts them all
   * to camelCase. Used to convert all keys to camelCase before being returned from the db.
   * Currently, this duplicates the keys, keeping the snake_case ones. This is due to the
   * following issue and StackOverflow question:
   * https://github.com/tgriesser/bookshelf/issues/1212
   * http://stackoverflow.com/questions/36875411/fetching-model-with-one-many-relationship-and-parse
   * @param  {Object} attributes An object that will be returned from the database.
   * @return {Object}            The same attributes, with camelCase keys.
   */
  camelCase(attributes) {
    const self = this;
    const attrs = {};
    _.each(attributes, (value, key) => {
      if (schema[self.tableName].hasOwnProperty(key)) {
        attrs[_.camelCase(key)] = value;
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
  stringifyObjects(attributes) {
    const self = this;
    const attrs = attributes;
    _.each(attrs, (value, key) => {
      if (schema[self.tableName].hasOwnProperty(key)
        && !!schema[self.tableName][key].isJson
        && _.isObject(value)) {
        attrs[key] = JSON.stringify(value);
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
  stringsToObjects(attributes) {
    const self = this;
    const attrs = attributes;
    _.each(attrs, (value, key) => {
      if (schema[self.tableName].hasOwnProperty(key)) {
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
  fixBools(attributes) {
    const self = this;
    const attrs = attributes;
    _.each(attrs, (value, key) => {
      if (schema[self.tableName].hasOwnProperty(key)
          && schema[self.tableName][key].type === 'bool') {
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
  fixDates(attributes) {
    const self = this;
    const attrs = attributes;
    _.each(attrs, (value, key) => {
      if (value !== null
          && schema[self.tableName].hasOwnProperty(key)
          && schema[self.tableName][key].type === 'dateTime') {
          // convert dateTime value into a native javascript Date object
        if (value.indexOf && value.indexOf('/') !== -1) {
          attrs[key] = moment(value, 'MM/DD/YYYY').toDate();
        } else {
          attrs[key] = moment(value).toDate();
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
  format(attributes) {
    let attrs = attributes;
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
  parse(attributes) {
    let attrs = attributes;
    attrs = this.stringsToObjects(attrs);
    attrs = this.fixDates(attrs);
    attrs = this.fixBools(attrs);
    attrs = this.camelCase(attrs);
    return attrs;
  },
});

export default lincsBookshelf;
