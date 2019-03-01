'use strict';

exports.up = async (Knex) => {
  await Knex.schema.table('movies', (table) => {
    table.text('name');
  })
  await Knex.raw('ALTER TABLE movies ALTER COLUMN title DROP NOT NULL');
};

exports.down = async (Knex) => {
  await Knex.schema.table('movies', (table) => {
    table.dropColumn('name');
  })
  await Knex.raw('ALTER TABLE movies ALTER COLUMN title SET NOT NULL');
};
