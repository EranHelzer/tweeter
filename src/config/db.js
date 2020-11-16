const { connectionString } = require('./index');

const db = require('knex')({
  client: 'pg',
  connection: connectionString,
  pool: {
    min: 0,
    max: 7
  }
});

module.exports = { db }