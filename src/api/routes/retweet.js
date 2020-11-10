import { create, findAll } from '../../controllers/retweet';

export default (app) => {
  app.get('/retweets', (req, res) => {
    findAll(req, res);
  });

  app.post('/tweets/:id/retweet', (req, res) => {
    create(req, res);
  });
};