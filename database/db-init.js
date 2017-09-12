'use strict';

var Sequelize = require('sequelize');

var databaseURI = process.env.DATABASE_URI


var db = new Sequelize(databaseURI, {
  define: {
    timestamps: false,
    underscored: true
  },
  logging: false
});

module.exports = db;
