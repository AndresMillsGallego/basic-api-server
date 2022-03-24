'use strict';


module.exports = (sequelize, DataTypes) => {
  return sequelize.define('funkos', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    collection: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    condition: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};