import generateKnex from 'knex';
import Twitter from 'twit';
import elasticSearch from 'elasticsearch';

const knexConfig = {
  development: {
    client: 'mysql',
    connection: {
      host: 'amp.pharm.mssm.edu',
      database: 'lincs',
      user: 'mike',
      password: 'Husky',
      insecureAuth: true,
      charset: 'utf8',
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
  staging: {
    client: 'mysql',
    connection: {
      database: 'lincs',
      user: 'mgm',
      password: 'Husky',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
  production: {
    client: 'mysql',
    connection: {
      host: 'amp.pharm.mssm.edu',
      database: 'lincs',
      user: 'mike',
      password: 'Husky',
      insecureAuth: true,
      charset: 'utf8',
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};

export const esClient = new elasticSearch.Client({
  hosts: [
    '146.203.54.74:31000',
    '146.203.54.165:31000',
    '146.203.54.92:31000',
  ],
  requestTimeout: 1000000,
  sniffOnConnectionFault: true,
  log: process.env.NODE_ENV === 'production' ? undefined : 'trace',
});

export const secret = 'LINCSnewwenSCNIL';
export const knex = generateKnex(knexConfig[process.env.NODE_ENV]);
export const Twit = new Twitter({
  consumer_key: 'vk0Wmxbn6xC8WDfJQCQezpQBf',
  consumer_secret: 'uBG7moBgtPSJo068Q7GSvU5exP1TeFh7OHihzrloOdEXqI7NWw',
  access_token: '2875718830-NSXVvLNoEOI3WS6umvG2SCmfiyf1v7JFcKM9SGA',
  access_token_secret: 'oloDBhGh317E1VzhaF2jfAgrirnv8oSXaHRq3Gi0cqOFl',
  timeout_ms: 60 * 1000,
});
