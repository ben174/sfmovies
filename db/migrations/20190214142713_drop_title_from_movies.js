'use strict';

exports.up = (Knex) => {
  return Knex.schema.table('movies', (table) => {
    table.dropColumn('title');
  })
  .then(() => {
    return Knex.raw('ALTER TABLE movies ALTER COLUMN name SET NOT NULL');
  });
};

exports.down = (Knex) => {
  return Knex.schema.table('movies', (table) => {
    table.text('title');
  })
  .then(() => {
    return Knex.raw('ALTER TABLE movies ALTER COLUMN name DROP NOT NULL');
  });
};
