'use strict';

const Controller      = require('./controller');
const CreateValidator = require('../../../validators/movies/create');
const ListValidator   = require('../../../validators/movies/list');

exports.register = (server, options, next) => {

  server.route([{
    method: 'POST',
    path: '/movies',
    config: {
      handler: (request, reply) => {
        reply(Controller.create(request.payload));
      },
      validate: {
        payload: CreateValidator
      }
    }
  }, {
    method: 'GET',
    path: '/movies',
    config: {
      handler: (request, reply) => {
        reply(Controller.list(request.query));
      },
      validate: {
        query: ListValidator
      }
    }
  }

  ]);

  next();

};

exports.register.attributes = {
  name: 'movies'
};
