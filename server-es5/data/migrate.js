'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _debug2 = require('debug');

var _debug3 = _interopRequireDefault(_debug2);

var _schema = require('./schema');

var _schema2 = _interopRequireDefault(_schema);

var _serverConf = require('../serverConf');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = (0, _debug3.default)('app:server:data:migrate');

function createTable(tableName) {
  debug('Creating table ' + tableName + '...');
  return _serverConf.knex.schema.createTable(tableName, function (table) {
    var column = void 0;
    var columnKeys = _lodash2.default.keys(_schema2.default[tableName]);
    columnKeys.forEach(function (key) {
      if (_schema2.default[tableName][key].type === 'text' && _schema2.default[tableName][key].hasOwnProperty('fieldtype')) {
        column = table[_schema2.default[tableName][key].type](key, _schema2.default[tableName][key].fieldtype);
      } else if (_schema2.default[tableName][key].type === 'string' && _schema2.default[tableName][key].hasOwnProperty('maxlength')) {
        column = table[_schema2.default[tableName][key].type](key, _schema2.default[tableName][key].maxlength);
      } else {
        column = table[_schema2.default[tableName][key].type](key);
      }
      if (_schema2.default[tableName][key].hasOwnProperty('nullable') && _schema2.default[tableName][key].nullable === true) {
        column.nullable();
      } else {
        column.notNullable();
      }
      if (_schema2.default[tableName][key].hasOwnProperty('primary') && _schema2.default[tableName][key].primary === true) {
        column.primary();
      }
      if (_schema2.default[tableName][key].hasOwnProperty('unique') && _schema2.default[tableName][key].unique) {
        column.unique();
      }
      if (_schema2.default[tableName][key].hasOwnProperty('unsigned') && _schema2.default[tableName][key].unsigned) {
        column.unsigned();
      }
      if (_schema2.default[tableName][key].hasOwnProperty('references')) {
        column.references(_schema2.default[tableName][key].references);
      }
      if (_schema2.default[tableName][key].hasOwnProperty('defaultTo')) {
        column.defaultTo(_schema2.default[tableName][key].defaultTo);
      }
    });
  });
}

var tableNames = _lodash2.default.keys(_schema2.default);
var dropPromises = tableNames.map(function (tableName) {
  debug('Dropping table ' + tableName + ' if it exists...');
  return _serverConf.knex.schema.dropTableIfExists(tableName);
});
var createPromises = tableNames.map(function (tableName) {
  return createTable(tableName);
});

_promise2.default.all(dropPromises).then(function () {
  _promise2.default.all(createPromises).then(function () {
    debug('Tables created!!');
    process.exit(0);
  }).catch(function (e) {
    debug(e);
    process.exit(1);
  });
}).catch(function (e) {
  debug(e);
  process.exit(1);
});