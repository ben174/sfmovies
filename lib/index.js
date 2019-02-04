'use strict';

const Util = require('util');

const Config = require('../config');
const Movies = require('./server');

Movies.start(() => {
  Util.log(`Server sharted on port: ${Config.PORT}`);
});
