module.exports = function(app) {

    var article = require('./../controllers/post-controllers.js');
  
    app.get('/new-article', article.new);
  
    app.post('/article/create', article.create);
  
    app.get('/article/list', article.list);
    
    app.get('/article/:articleID', article.single);
  
  }