'use strict';

const Movie = require('../../../models/movie');

exports.create = async (payload) => {
  payload.name = payload.title;
  Reflect.deleteProperty(payload, 'title');
  const movie = await new Movie().save(payload);

  return new Movie({ id: movie.id }).fetch();
};
