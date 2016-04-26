import bookshelf from 'bookshelf';
import moment from 'moment';
import _ from 'lodash';
import camelize from 'camelize';

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
  camelCase(attributes) {
    const self = this;
    const attrs = attributes;
    _.each(attributes, (value, key) => {
      if (schema[self.tableName].hasOwnProperty(key)) {
        attrs[camelize(key)] = value;
      }
    });
    return attrs;
  },
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
  // serialize(options = {}) {
  //   const { shallow = false, omitPivot = false, ...rest } = options;
  //   const { attributes } = this;
  //
  //   if (!shallow) {
  //     const relations = _.mapValues(this.relations, (relation) => {
  //       if (relation.toJSON !== null) {
  //         return relation.toJSON({ shallow, omitPivot, ...rest });
  //       }
  //       return relation;
  //     });
  //
  //     const pivot = this.pivot && !omitPivot && this.pivot.attributes;
  //     const pivotAttributes = _.mapKeys(pivot, (value, key) =>
  //       `_pivot_${key}`
  //     );
  //
  //     return { ...attributes, ...relations, ...pivotAttributes };
  //   }
  //
  //   return { ...attributes };
  // },
  format(attributes) {
    let attrs = attributes;
    attrs = this.snakeCase(attrs);
    attrs = this.stringifyObjects(attrs);
    attrs = this.fixDates(attrs);
    return attrs;
  },
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
