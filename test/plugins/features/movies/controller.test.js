'use strict';

const Controller = require('../../../../lib/plugins/features/movies/controller');

describe('movie controller', () => {

  describe('create', () => {

    it('creates a movie', async () => {
      const payload = { title: 'WALL-E' };

      const movie = await Controller.create(payload);

      expect(movie.get('title')).to.eql(payload.title);
    });

  });

});
