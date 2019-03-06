'use strict';

exports.up = async function (knex, Promise) {
  return await knex.schema.createTable('locations', (table) => {
    table.increments('id').primary();
    table.text('name').notNullable();
  });
};

exports.down = async function (knex, Promise) {
  await knex.schema.dropTable('locations');
};
