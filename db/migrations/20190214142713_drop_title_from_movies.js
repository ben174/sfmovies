'use strict';

exports.up = async (Knex) => {
  await Knex.schema.table('movies', (table) => {
    table.dropColumn('title');
  })
  await Knex.raw('ALTER TABLE movies ALTER COLUMN name SET NOT NULL');
};

exports.down = async (Knex) => {
  await Knex.schema.table('movies', (table) => {
    table.text('title');
  })
  await Knex.raw('ALTER TABLE movies ALTER COLUMN name DROP NOT NULL');
};
