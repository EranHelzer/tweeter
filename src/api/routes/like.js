const { create } = require('../../controllers/like');

module.exports = (app) => {
  app.post('/tweets/:id/likes', (req, res) => {
    create(req, res);
  });
};