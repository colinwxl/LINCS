'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.knex = exports.secret = undefined;

var _knex = require('knex');

var _knex2 = _interopRequireDefault(_knex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var knexConfig = {
  development: {
    client: 'mysql',
    connection: {
      host: 'amp.pharm.mssm.edu',
      database: 'lincs',
      user: 'mike',
      password: 'Husky',
      insecureAuth: true,
      charset: 'utf8'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  staging: {
    client: 'mysql',
    connection: {
      database: 'lincs',
      user: 'mgm',
      password: 'Husky'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  production: {
    client: 'mysql',
    connection: {
      host: 'amp.pharm.mssm.edu',
      database: 'lincs',
      user: 'mike',
      password: 'Husky',
      insecureAuth: true,
      charset: 'utf8'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};

var secret = exports.secret = 'LINCSnewwenSCNIL';
var knex = exports.knex = (0, _knex2.default)(knexConfig[process.env.NODE_ENV]);