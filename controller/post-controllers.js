var Article = require('./../model/posts.js');

module.exports.new = function(request, res) {
  res.sendFile(__dirname+'/view/form.html');
}

module.exports.create = function(request, response) {
  var post = new Post(request.body);
  new_post.save(function(err, data) {
    if (err)
      return response.status(400)
        .json({
          error: "Please add a title",
          error: "Please add a Post",
          error: "Reading time must be greater than 1 min"
        });
        
    console.log(data);
    return response.status(200)
    
      .json({
        message: "Post successfully created"
      });
     

  })
  console.log(request.body);
}

module.exports.list = function(request, response) {
Article.find(function(err, data){
  if(err){
    response.status(400)
      .json({
        error: "Database query error"
      });
  }

  response.status(200).json({
    post : data
  });
});

}
module.exports.single = function(request, response) {

  Article.findOne({_id:request.params.postID},
    function(err, data){
      if(err){
        response.status(400)
          .json({
            error: "Database query error"
          });
      }else{
      response.render('article.ejs', {
        post: data
      })
    }
  });

}