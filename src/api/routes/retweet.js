const { body, validationResult } = require('express-validator');
const { create, findAll } = require('../../controllers/retweet');

module.exports = (app) => {
  app.get('/retweets', (req, res) => {
    findAll(req, res);
  });

  app.post('/tweets/:id/retweet', [
    body('username').isLength({ min: 5, max: 255 })
  ], (req, res) => {
    const errors = validationResult(req);

    console.log(errors);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    create(req, res);
  });
};