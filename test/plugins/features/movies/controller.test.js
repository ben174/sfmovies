'use strict';

const Controller = require('../../../../lib/plugins/features/movies/controller');
const Knex       = require('../../../../lib/libraries/knex');

describe('movie controller', () => {

  describe('filter', () => {

    beforeEach(async () => {
      const movies = [
        { name: 'The Godfather', release_year: 1972 },
        { name: 'The Godfather: Part II', release_year: 1974 },
        { name: 'The Godfather: Part III', release_year: 1990 },
        { name: 'Dumb and Dumber' }
      ];
      await Knex.raw('TRUNCATE movies CASCADE');
      return Knex('movies').insert(movies);
    });

    it('lists all movies', async () => {
      const filter = {};

      const movies = await Controller.list(filter);

      expect(movies).to.have.length(4);
    });

    it('filters by title', async () => {
      const filter = { title: 'godfather' };

      const movies = await Controller.list(filter);

      expect(movies).to.have.length(3);
    });

    it('filters by release_year', async () => {
      const filter = { release_year: '1972' };

      const movies = await Controller.list(filter);

      expect(movies).to.have.length(1);
    });

    it('filters by released_after', async () => {
      const filter = { released_after: '1973' };

      const movies = await Controller.list(filter);

      expect(movies).to.have.length(2);
    });

    it('filters by released_before', async () => {
      const filter = { released_before: '1973' };

      const movies = await Controller.list(filter);

      expect(movies).to.have.length(1);
    });

  });

  describe('create', () => {

    it('creates a movie', async () => {
      const payload = { title: 'WALL-E' };

      const movie = await Controller.create(payload);

      expect(movie.get('name')).to.eql(payload.title);
    });

  });

});
