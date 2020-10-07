var express = require('express');
var router = express.Router();
var {con,exceptionHandler} =require('./baseUtil')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});






module.exports = router;
