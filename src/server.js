import express from 'express';
import loaders from './loaders';
import { port } from './config';

async function startServer() {
  const app = express();

  await loaders.init({ app });

  app.listen(port, err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Server is running on port ${port}.`);
  });
}

startServer();
