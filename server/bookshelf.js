import config from './knexfile';

const knex = require('knex')(config[process.env.NODE_ENV]);

knex.migrate.latest([config]);

export default require('bookshelf')(knex);
