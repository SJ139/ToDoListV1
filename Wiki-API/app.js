const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
// const _ = require("lodash");

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

//Set Up Mongo Database
mongoose.connect("mongodb://localhost:27017/wikiDB", {useNewUrlParser: true});
const articleSchema = {
  title: String,
  content: String
}
const Article = mongoose.model("Article", articleSchema);

//Get articles for the /Article route (the entire collection)

app.get ("/article", function(req,res){
  Article.find(function(err,foundArticles){
    res.send(foundArticles);
  });
});



app.listen(3000, function() {
  console.log("Server started on port 3000");
});
