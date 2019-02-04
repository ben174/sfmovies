'use strict';

const Hapi = require('hapi');

const Config = require('../config');

const server = new Hapi.Server({
  connections: {
    router: { stripTrailingSlash: true } // removes trailing slashes on incoming paths
  }
});

server.connection({ port: Config.PORT });

module.exports = server;
