'use strict';

function handle500(error, request, response, next) {
  console.log('Logging from the handle 500', error);
  response.status(error.status).send(error.message);
}

module.exports = handle500;