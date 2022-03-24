'use strict';

const server = require('./src/server');
const { sequelize } = require('./src/models');
const PORT = process.env.PORT || 3001;


// This function creates all associated tables and ensures a good connection
sequelize.sync()
  .then(() => {
    console.log('Ey Yo We Did It!');
  })
  .catch(error => {
    console.error(error);
  });


server.start(PORT);