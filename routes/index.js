var express = require('express');
var router = express.Router();
var logger = require('../utils/logger');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:id', function(req, res, next) {
  var id = req.param('id');
  logger.info('parameter id: ' + id);
  res.render('index', { title: 'Express' });
});

module.exports = router;
