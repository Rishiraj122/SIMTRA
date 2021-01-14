var express = require('express');
var app = express();
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.render("home.ejs");
});

app.get("/home", function(req,res){
    res.render("workout.ejs");
});

app.get("/workout",function(req,res){
    res.render("exercise.ejs");
});

app.get("*", function(req, res) {
    res.render("home.ejs");
});

app.listen(process.env.PORT, process.env.IP, function(req, res) {
    console.log("Server has been started baby");
});