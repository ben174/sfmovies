'use strict';

exports.up = function (Knex, Promise) {
  return Knex.schema.createTable('locations_movies', (table) => {
    table.integer('location_id');
    table.integer('movie_id');
    table.primary(['movie_id', 'location_id']);
  });
};

exports.down = function (Knex, Promise) {
  return Knex.schema.dropTable('locations_movies');
};
