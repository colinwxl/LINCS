'use strict';

module.exports = {
  development: {
    client: 'mysql',
    debug: true,
    connection: {
      host: '127.0.0.1',
      port: '3306',
      database: 'lincs',
      user: 'root',
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
  }
};