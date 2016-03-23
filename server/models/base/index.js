import bookshelf from 'bookshelf';
import moment from 'moment';
import _ from 'lodash';

import { knex } from '../../serverConf';
import pagination from './pagination';
import schema from '../../data/schema';

const lincsBookshelf = bookshelf(knex);

lincsBookshelf.plugin('registry');
lincsBookshelf.plugin(pagination);

lincsBookshelf.Model = lincsBookshelf.Model.extend({
  hasTimestamps: true,
  permittedAttributes() {
    return _.keys(schema[this.tableName]);
  },
  // defaults: () => ({}),
  stringifyObjects: function stringifyObjects(attributes) {
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
  stringsToObjects: function stringsToObjects(attributes) {
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
  fixBools: function fixBools(attributes) {
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
  fixDates: function fixDates(attributes) {
    const self = this;
    const attrs = attributes;
    _.each(attrs, (value, key) => {
      if (value !== null
          && schema[self.tableName].hasOwnProperty(key)
          && schema[self.tableName][key].type === 'dateTime') {
          // convert dateTime value into a native javascript Date object
        attrs[key] = moment(value).toDate();
      }
    });
    return attrs;
  },
  format(attributes) {
    let attrs = attributes;
    attrs = this.stringifyObjects(attrs);
    attrs = this.fixDates(attrs);
    return attrs;
  },
  parse(attributes) {
    let attrs = attributes;
    attrs = this.stringsToObjects(attrs);
    attrs = this.fixDates(attrs);
    attrs = this.fixBools(attrs);
    return attrs;
  },
});

export default lincsBookshelf;
