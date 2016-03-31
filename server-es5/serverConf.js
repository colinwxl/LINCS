'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Twit = exports.knex = exports.secret = undefined;

var _knex = require('knex');

var _knex2 = _interopRequireDefault(_knex);

var _twit = require('twit');

var _twit2 = _interopRequireDefault(_twit);

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
var Twit = exports.Twit = new _twit2.default({
  consumer_key: 'vk0Wmxbn6xC8WDfJQCQezpQBf',
  consumer_secret: 'uBG7moBgtPSJo068Q7GSvU5exP1TeFh7OHihzrloOdEXqI7NWw',
  access_token: '2875718830-NSXVvLNoEOI3WS6umvG2SCmfiyf1v7JFcKM9SGA',
  access_token_secret: 'oloDBhGh317E1VzhaF2jfAgrirnv8oSXaHRq3Gi0cqOFl',
  timeout_ms: 60 * 1000
});