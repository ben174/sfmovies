'use strict';

const Movies    = require('./data/movies');
const Locations = require('./data/locations');

exports.seed = async (Knex) => {
  await Knex('movies').truncate();
  await Knex('movies').insert(Movies);
  await Knex('locations').truncate();
  await Knex('locations').insert(Locations);
};
