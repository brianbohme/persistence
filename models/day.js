var Sequelize = require('sequelize');
var db = require('./_db');

var Day = db.define('day', {
  day: Sequelize.INTEGER,
});

module.exports = Day;
