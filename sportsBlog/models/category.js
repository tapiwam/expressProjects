var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  created_at:{
    type: Date,
    default: Date.now
  }
});

var Category = module.exports = mongoose.model('Category' , categorySchema);


// Get categories
module.exports.getCategories = function(callback){
  Category.find(callback).sort([['title', 'asc']]);
};

// Get single category
module.exports.addCategory = function(category, callback){
  Category.create(category, callback);
};

// Add Category
