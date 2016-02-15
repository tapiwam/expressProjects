var express = require('express');
var router = express.Router();

Category = require('../models/category.js');


router.get('/', function(req, res, next) {
  Category.getCategories(function(err, categories){
    if(err){
      res.send(err);
    } else {
      res.render('categories', {
        title: 'All Categories',
        categories: categories
      });
    }
  });
});

router.get('/add', function(req, res, next) {
  res.render('add_category', {title: "Add Category"});
});

router.post('/add', function(req, res, next) {

  req.checkBody('title', 'Title is required').notEmpty();
  var errors = req.validationErrors();

  if(errors){
    res.render('add_category', {
      errors: errors,
      title: 'Add Category'
    });
  } else {

    var category = new Category();
    category.title = req.body.title;
    category.description = req.body.description;

    Category.addCategory(category, function(err, category){
      if(err){
        res.send(err);
      } else {
        req.flash('success', 'Category Saved');
        res.redirect('/manage/categories');
      }
    });

  }
  res.send(req.body.title);
});

module.exports = router;
