'use strict';

const Joi = require('joi');

const CreateValidator = require('../../../lib/validators/movies/create');

describe('create movie validator', () => {

  describe('title', () => {

    it('is required', () => {
      const payload = {};
      const result = Joi.validate(payload, CreateValidator);
      expect(result.error.details[0].path[0]).to.eql('title');
      expect(result.error.details[0].type).to.eql('any.required');
    });

    it('is less than 255 characters', () => {
      const payload = { title: 'x'.repeat(256) };
      const result = Joi.validate(payload, CreateValidator);
      expect(result.error.details[0].path[0]).to.eql('title');
      expect(result.error.details[0].type).to.eql('string.max');
    });

  });

  describe('release_year', () => {

    it('is after 1878', () => {
      const payload = { title: 'x', release_year: 1877 };
      const result = Joi.validate(payload, CreateValidator);
      expect(result.error.details[0].path[0]).to.eql('release_year');
      expect(result.error.details[0].type).to.eql('number.min');
    });

    it('is limited to 4 digits', () => {
      const payload = { title: 'x', release_year: 18771 };
      const result = Joi.validate(payload, CreateValidator);
      expect(result.error.details[0].path[0]).to.eql('release_year');
      expect(result.error.details[0].type).to.eql('number.max');
    });

  });

});
