'use strict';

const Joi = require('joi');

const ListValidator = require('../../../lib/validators/movies/list');

describe('list movies validator', () => {

  describe('title', () => {

    it('is less than 255 characters', () => {
      const payload = { title: 'x'.repeat(256) };
      const result = Joi.validate(payload, ListValidator);
      expect(result.error.details[0].path[0]).to.eql('title');
      expect(result.error.details[0].type).to.eql('string.max');
    });

  });

  describe('release_year', () => {

    it('is after 1878', () => {
      const payload = { release_year: 1877 };
      const result = Joi.validate(payload, ListValidator);
      expect(result.error.details[0].path[0]).to.eql('release_year');
      expect(result.error.details[0].type).to.eql('number.min');
    });

    it('is limited to 4 digits', () => {
      const payload = { release_year: 18771 };
      const result = Joi.validate(payload, ListValidator);
      expect(result.error.details[0].path[0]).to.eql('release_year');
      expect(result.error.details[0].type).to.eql('number.max');
    });

  });

  describe('released_after', () => {

    it('is after 1878', () => {
      const payload = { release_year: 1877 };
      const result = Joi.validate(payload, ListValidator);
      expect(result.error.details[0].path[0]).to.eql('release_year');
      expect(result.error.details[0].type).to.eql('number.min');
    });

    it('is limited to 4 digits', () => {
      const payload = { release_year: 18771 };
      const result = Joi.validate(payload, ListValidator);
      expect(result.error.details[0].path[0]).to.eql('release_year');
      expect(result.error.details[0].type).to.eql('number.max');
    });

  });

  describe('released_before', () => {

    it('is after 1878', () => {
      const payload = { release_year: 1877 };
      const result = Joi.validate(payload, ListValidator);
      expect(result.error.details[0].path[0]).to.eql('release_year');
      expect(result.error.details[0].type).to.eql('number.min');
    });

    it('is limited to 4 digits', () => {
      const payload = { release_year: 18771 };
      const result = Joi.validate(payload, ListValidator);
      expect(result.error.details[0].path[0]).to.eql('release_year');
      expect(result.error.details[0].type).to.eql('number.max');
    });

  });

});
