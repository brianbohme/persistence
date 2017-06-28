var Promise = require('bluebird');
var router = require('express').Router();
var Day = require('../../models').Day;


router.get('/', function (req, res, next) {
  res.send('got all days')
});

router.get('/:id', function (req, res, next) {
  res.send('got one day')
});

router.post('/:id', function (req, res, next) {
  res.send('add or delete a day')
});

router.post('/:id/:option', function (req, res, next) {
  res.send('add or delete an activity or restaurant')
});

module.exports = router;
