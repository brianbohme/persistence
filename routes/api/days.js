var Promise = require('bluebird');
var router = require('express').Router();
var Day = require('../../models').Day;


router.get('/', function (req, res, next) {
  Day.findAll({})
  .then(days => {
    res.json(days)
  })
});

router.get('/:id', function (req, res, next) {
  Day.findOne({where: {number : req.params.id}})
  .then(day => {
    res.json(day)
  })
});

router.post('/:id', function (req, res, next) {
  let date = req.params.id;
  let body = req.body;
  Day.create(
    {number: date}
  )
  .then(event=>{
    console.log(event);
    res.sendStatus(200);
  })
  .catch(err => {
    console.log(err);
  })
});

router.post('/:id/:option', function (req, res, next) {
  res.send('add or delete an activity or restaurant')
});

module.exports = router;
