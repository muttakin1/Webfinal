var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var postSchema = new Schema({
  title: {
    type: String,
    required: "Title required"
  },
  text : {
    type: String,
    required: "Text required"
  },
  reading_length :{
    type: Number,
    required: "Reading time required"
  }
});

var Post = mongoose.model('Posts', postSchema)
module.exports = Post;