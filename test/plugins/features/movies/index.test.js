'use strict';

const Movies = require('../../../../lib/server');

describe('movies integration', () => {

  describe('create', () => {

    it('creates a movie', () => {
      return Movies.inject({
        url: '/movies',
        method: 'POST',
        payload: { title: 'Volver' }
      })
      .then((response) => {
        expect(response.statusCode).to.eql(200);
        expect(response.result.object).to.eql('movie');
      });
    });

    it('lists movies', () => {
      return Movies.inject({
        url: '/movies',
        method: 'GET'
      })
      .then((response) => {
        expect(response.statusCode).to.eql(200);
      });
    });

  });

  describe('location', () => {

    it('associates a location with a movie', () => {
      return Movies.inject({
        url: '/movies/1/locations',
        method: 'POST',
        payload: { location: 1 }
      })
      .then((response) => {
        expect(response.statusCode).to.eql(200);
        expect(response.result.locations[0].id).to.eql(1);
      });

    });

  });

});
