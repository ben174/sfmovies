'use strict';

const Joi = require('joi');

module.exports = Joi.object().keys({
  title: Joi.string().min(1).max(255).optional(),
  release_year: Joi.number().integer().min(1878).max(9999).optional(),
  released_after: Joi.number().integer().min(1878).max(9999).optional(),
  released_before: Joi.number().integer().min(1878).max(9999).optional()
});
