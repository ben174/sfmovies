'use strict';

const Movie = require('../../../models/movie');

exports.create = async (payload) => {
  const newPayload = Object.assign({}, payload);
  newPayload.name = newPayload.title;
  Reflect.deleteProperty(newPayload, 'title');
  const movie = await new Movie().save(newPayload);

  return new Movie({ id: movie.id }).fetch();
};

exports.list = async (filter) => {
  const results = await new Movie().query((qb) => {
    if (filter.title) {
      qb.where('name', 'ilike', `%${  filter.title  }%`);
    }
    if (filter.release_year) {
      qb.where('release_year', '=', filter.release_year);
    }
    if (filter.released_after) {
      qb.where('release_year', '>', filter.released_after);
    }
    if (filter.released_before) {
      qb.where('release_year', '<', filter.released_before);
    }
  }).fetchAll();
  return results;
};
