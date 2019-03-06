'use strict';

const Joi = require('joi');

module.exports = Joi.object().keys({
  location: Joi.number().integer().min(1).required()
});
