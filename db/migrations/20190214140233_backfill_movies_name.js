'use strict';

exports.up = async (Knex) => {
  await Knex.raw('UPDATE movies SET name = title');
};

exports.down = async () => {
  return undefined;
};
