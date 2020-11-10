import express from 'express';
import { port } from './config';

async function startServer() {
  const app  = express();

  await require('./loaders')({ expressApp: app });

  app.listen(port, err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Server is running on port ${port}.`);
  });
}

startServer();
