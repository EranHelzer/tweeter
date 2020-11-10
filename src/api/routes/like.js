import { create } from '../../controllers/like';

export default (app) => {
  app.post('/tweets/:id/likes', (req, res) => {
    create(req, res);
  });
};