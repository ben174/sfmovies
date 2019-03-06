'use strict';

const Bookshelf = require('../libraries/bookshelf');

module.exports = Bookshelf.Model.extend({
  tableName: 'locations',
  serialize: function () {
    return {
      id: this.get('id'),
      name: this.get('name'),
      object: 'location'
    };
  }
});
