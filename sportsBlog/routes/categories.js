var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('categories', { title: 'All Categories' });
});

module.exports = router;
