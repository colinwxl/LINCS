
exports.up = function up(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('webinars', (table) => {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.date('date').notNullable();
      table.string('presenter_name');
      table.string('presenter_affiliation');
      table.string('presenter_url');
      table.timestamps();
    }),
    knex.schema.createTableIfNotExists('workshops', (table) => {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.string('description').notNullable();
      table.string('location').notNullable();
      table.date('start_date').notNullable();
      table.date('end_date');
      table.json('links');
      table.timestamps();
    }),
    knex.schema.createTableIfNotExists('symposia', (table) => {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.string('sub_title');
      table.string('location').notNullable();
      table.date('start_date').notNullable();
      table.string('description');
      table.date('end_date');
      table.json('links');
      table.timestamps();
    }),
    knex.schema.createTableIfNotExists('funding_opportunities', (table) => {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.string('description').notNullable();
      table.date('date').notNullable();
      table.date('release_date');
      table.date('open_date');
      table.date('due_date');
      table.date('review_date');
      table.date('announced_date');
      table.date('start_date');
      table.json('links');
      table.timestamps();
    }),
  ]);
};

exports.down = function down(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('webinars'),
    knex.schema.dropTable('workshops'),
    knex.schema.dropTable('symposia'),
    knex.schema.dropTable('funding_opportunities'),
  ]);
};
