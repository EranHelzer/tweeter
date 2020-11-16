require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';
let connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

module.exports = {
    env: process.env.NODE_ENV,
    host: process.env.HOST,
    port: process.env.PORT,
    connectionString: isProduction ? process.env.DATABASE_URL : connectionString
}