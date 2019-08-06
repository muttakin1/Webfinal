var http = require('http');
var express = require('express');
var app = express();
var server= http.Server(app);
var bodyParser=require ('body-parser');
var mongo = require('mongodb');

var db_url= "mongodb+srv://Muttakin:12345six@cluster0-2wehj.mongodb.net/test?retryWrites=true&w=majority"
var db;
var mongoose = require("mongoose");

mongoose.connect(db_url, { useNewUrlParser: true });
mongoose.connection.on('error', function(err){
  console.log(err);
  console.log('Could not connect to mongodb');
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

 app.get('/index',function(req,res){
     res.sendFile(__dirname+'/form.html')
})
app.get('/article',function(req,res){
       res.sendFile(__dirname+'/posts.html')
 })