import generateKnex from 'knex';

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

export const secret = 'LINCSnewwenSCNIL';
export const knex = generateKnex(knexConfig[process.env.NODE_ENV]);
