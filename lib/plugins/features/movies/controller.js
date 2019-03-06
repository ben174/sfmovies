'use strict';

const Movie = require('../../../models/movie');

exports.create = async (payload) => {
  const newPayload = Object.assign({}, payload);
  newPayload.name = newPayload.title;
  Reflect.deleteProperty(newPayload, 'title');
  const movie = await new Movie().save(newPayload);

  return new Movie({ id: movie.id }).fetch();
};
