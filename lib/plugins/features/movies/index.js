'use strict';

exports.register = (server, options, next) => {

  server.route([{
    method: 'POST',
    path: '/movies',
    config: {
      handler: (request, reply) => {
        reply('hello world');
      }
    }
  }]);

  next();

};

exports.register.attributes = {
  name: 'movies'
};
