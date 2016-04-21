import _ from 'lodash';
import _debug from 'debug';

import schema from './schema';
import { knex } from '../serverConf';

const debug = _debug('app:server:data:migrate');

function createTable(tableName) {
  debug(`Creating table ${tableName}...`);
  return knex.schema.createTable(tableName, (table) => {
    let column;
    const columnKeys = _.keys(schema[tableName]);
    columnKeys.forEach((key) => {
      if (schema[tableName][key].type === 'text'
        && schema[tableName][key].hasOwnProperty('fieldtype')) {
        column = table[schema[tableName][key].type](key, schema[tableName][key].fieldtype);
      } else if (schema[tableName][key].type === 'string'
        && schema[tableName][key].hasOwnProperty('maxlength')) {
        column = table[schema[tableName][key].type](key, schema[tableName][key].maxlength);
      } else {
        column = table[schema[tableName][key].type](key);
      }
      if (schema[tableName][key].hasOwnProperty('nullable')
        && schema[tableName][key].nullable === true) {
        column.nullable();
      } else {
        column.notNullable();
      }
      if (schema[tableName][key].hasOwnProperty('primary')
        && schema[tableName][key].primary === true) {
        column.primary();
      }
      if (schema[tableName][key].hasOwnProperty('unique') && schema[tableName][key].unique) {
        column.unique();
      }
      if (schema[tableName][key].hasOwnProperty('unsigned') && schema[tableName][key].unsigned) {
        column.unsigned();
      }
      if (schema[tableName][key].hasOwnProperty('references')) {
        column.references(schema[tableName][key].references);
      }
      if (schema[tableName][key].hasOwnProperty('defaultTo')) {
        column.defaultTo(schema[tableName][key].defaultTo);
      }
    });
  });
}

const tableNames = _.keys(schema);
const dropPromises = tableNames.map((tableName) => {
  debug(`Dropping table ${tableName} if it exists...`);
  if (process.env.NODE_ENV !== 'production') {
    return knex.schema.dropTableIfExists(tableName);
  }
  return knex
    .raw('SET foreign_key_checks = 0;')
    .then(() => knex.schema.dropTableIfExists(tableName))
    .then(() => knex.raw('SET foreign_key_checks = 1;'));
});
const createPromises = tableNames.map((tableName) => createTable(tableName));

Promise
  .all(dropPromises)
  .then(() => {
    Promise
      .all(createPromises)
      .then(() => {
        debug('Tables created!!');
        process.exit(0);
      })
      .catch((e) => {
        debug(e);
        process.exit(1);
      });
  })
  .catch(e => {
    debug(e);
    process.exit(1);
  });
