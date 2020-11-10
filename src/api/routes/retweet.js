const { create, findAll } = require('../../controllers/retweet');

module.exports = (app) => {
  app.get('/retweets', (req, res) => {
    findAll(req, res);
  });

  app.post('/tweets/:id/retweet', (req, res) => {
    create(req, res);
  });
};