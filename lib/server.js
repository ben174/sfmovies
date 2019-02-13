'use strict';

const Hapi = require('hapi');

const Config = require('../config');

const server = new Hapi.Server({
  connections: {
    router: { stripTrailingSlash: true } // removes trailing slashes on incoming paths
  }
});

server.connection({ port: Config.PORT });

server.register([
  require('hapi-bookshelf-serializer'),
  require('./plugins/features/movies')
], (err) => {
  /* istanbul ignore if */
  if (err) {
    throw err;
  }
});

module.exports = server;
