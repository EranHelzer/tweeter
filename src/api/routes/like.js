const { body, validationResult } = require('express-validator');
const { create } = require('../../controllers/like');

module.exports = (app) => {
  app.post('/tweets/:id/likes', [
    body('username').isLength({ min: 5, max: 255 })
  ], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    create(req, res);
  });
};