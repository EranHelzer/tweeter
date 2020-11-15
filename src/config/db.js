require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';
const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

console.log(isProduction ? process.env.DATABASE_URL : connectionString);

const db = require('knex')({
  client: 'pg',
  connection: isProduction ? process.env.DATABASE_URL : connectionString,
  pool: {
    min: 0,
    max: 7
  }
});

module.exports = { db }