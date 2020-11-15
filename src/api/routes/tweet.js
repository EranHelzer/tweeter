const { body, validationResult } = require('express-validator');
const { create, findAll } = require('../../controllers/tweet');

module.exports = (app) => {
  app.get('/tweets', (req, res) => {
    findAll(req, res);
  });

  app.post('/tweets', [
    body('content').isLength({ min: 5, max: 255 }),
    body('username').isLength({ min: 5, max: 255 })
  ], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    create(req, res);
  });
};