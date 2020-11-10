require('dotenv').config();

module.exports = {
    env: process.env.NODE_ENV,
    host: process.env.HOST,
    port: process.env.PORT
}