'use strict';


module.exports = (sequelize, DataTypes) => {
  return sequelize.define('movies', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    yearReleased: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
};