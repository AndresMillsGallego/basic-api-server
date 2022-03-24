'use strict';

function handleLog(request, response, next) {
  console.log('Request: ', request.path);
  console.log('Method: ', request.method);
  next();
}

module.exports = handleLog;