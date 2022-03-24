'use strict';

require('dotenv').config();

const express = require('express');
const funkoRouter = require('./routes/funko');
const movieRouter = require('./routes/movies');
const handle404 = require('./error-handlers/404');
const handle500 = require('./error-handlers/500');


const app = express();

app.use(express.json());

app.get('/', (request, response, next) => {
  response.send('King Snorlax welcomes you to his server');
});
app.use(funkoRouter);
app.use(movieRouter);

app.use(handle404);
app.use(handle500);

module.exports = {
  app,
  start: (PORT) => {
    app.listen(PORT, () => {
      console.log('Jigglypuff is running this App on port ', PORT);
    });
  },
};