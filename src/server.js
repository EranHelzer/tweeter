const express = require('express');
const loaders = require('./loaders');
const { port } = require('./config');

async function startServer() {
  const app = express();

  await loaders({ app });

  app.listen(port, err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Server is running on port ${port}.`);
  });
}

startServer();
