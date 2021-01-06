var express = require('express');
var app = express();
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.render("home.ejs");
});

app.get("/1",function(req,res){
    res.render("index.ejs");
});

app.get("*", function(req, res) {
    res.render("home.ejs");
})

app.listen(process.env.PORT, process.env.IP, function(req, res) {
    console.log("Server has been started baby");
});