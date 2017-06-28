var Sequelize = require('sequelize');
var db = require('./_db');

var Day = db.define('day', {
  number: Sequelize.INTEGER
}, {
  hooks: {
    afterCreate: day => {
      day.setDataValue('number', day.getDataValue('id'))
    }
  }
});

module.exports = Day;
