'use strict';

const Controller        = require('./controller');
const CreateValidator   = require('../../../validators/movies/create');
const ListValidator     = require('../../../validators/movies/list');
const LocationValidator = require('../../../validators/movies/location');

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
    method: 'POST',
    path: '/movies/{id}/locations',
    config: {
      handler: (request, reply) => {
        reply(Controller.addLocation(request.params.id, request.payload));
      },
      validate: {
        payload: LocationValidator
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
