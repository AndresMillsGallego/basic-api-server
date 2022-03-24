'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const funkoSchema = require('./funko');
const movieSchema = require('./movies');

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory' 
  : process.env.DATABASE_URL || 'postgresql://localhost:5432/basic-api-server';

const sequelize = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const FunkoModel = funkoSchema(sequelize, DataTypes);
const MovieModel = movieSchema(sequelize, DataTypes);

module.exports = {
  sequelize,
  FunkoModel,
  MovieModel,
};