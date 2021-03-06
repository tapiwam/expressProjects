var express = require('express');
var router = express.Router();

Categeory = require('../models/category');

router.get('/articles', function(req, res, next) {
  res.render('manage_articles', { title: 'Manage Articles' });
});

router.get('/articles/add', function(req, res, next) {
  res.render('add_article', { title: 'Add Article' });
});

router.get('/articles/edit/:id', function(req, res, next) {
  res.render('edit_article', { title: 'Edit Article' });
});


// ==============================================


router.get('/categories', function(req, res, next) {
  Category.getCategories(function(err, categories){
    if(err){
      res.send(err);
    } else {
      res.render('manage_categories', {
        title: 'Manage Categories',
        categories: categories
      });
    }
  });
});

router.get('/categories/add', function(req, res, next) {
  res.render('add_category', { title: 'Add Category' });
});

router.get('/categories/edit/:id', function(req, res, next) {

  Category.getCategoryById([req.params.id], function(err, category){
    if(err){
      res.send(err);
    } else {
      res.render('edit_category', {
        title: 'Edit Category',
        category: category
      });
    }
  });


});

module.exports = router;
