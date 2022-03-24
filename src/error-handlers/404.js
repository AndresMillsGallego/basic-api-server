'use strict';

function handle404(error, request, response, next) {
  console.log('Logging from the handle 404', error);
  response.status(error.status).send(error.message);
}

module.exports = handle404;