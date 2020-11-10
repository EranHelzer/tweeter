import { create, findAll } from '../../controllers/tweet';

export default (app) => {
  app.get('/tweets', (req, res) => {
    findAll(req, res);
  });

  route.post('/tweets', (req, res) => {
    create(req, res);
  });
};