'use strict';

const MovieValidator = require('../../../validators/movie');

exports.register = (server, options, next) => {

  server.route([{
    method: 'POST',
    path: '/movies',
    config: {
      handler: (request, reply) => {
        reply('hello world');
      },
      validate: {
        payload: MovieValidator
      }
    }
  }]);

  next();

};

exports.register.attributes = {
  name: 'movies'
};
