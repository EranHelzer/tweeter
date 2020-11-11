const { create, findAll } = require('../../controllers/tweet');

module.exports = (app) => {
  app.get('/tweets', (req, res) => {
    console.log('all tweets');
    findAll(req, res);
  });

  app.post('/tweets', (req, res) => {
    create(req, res);
  });
};