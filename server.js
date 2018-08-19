var express = require("express");

var app = express();
var PORT = 3000;

var path = require("path");
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var items = ["toilet paper", "milk", "sparkling water", "coffee", "chocolate"];

// var familyMembers = require("./data/familyData.js");

///html routes to render the pages

app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, "./public/view.html"));
});

app.get("/addItem", function(req, res){
	res.sendFile(path.join(__dirname, "./public/add.html"));
});

app.get("/all", function(req, res){
	res.sendFile(path.join(__dirname, "./public/all.html"));
});




//api routes to deal with the data
app.get("/api/all", function(req, res){
	res.json(items);
})

app.post("/api/addItem", function(req, res){
	console.log(req.body);
	var newItem = req.body.newItem;
	console.log(newItem);
	items.push(newItem);
	res.json(newItem);
	// var newItem = req.body;
	// console.log(req.body);
	// console.log(newItem);
	// items.push(newItem);
	// res.json(newItem);
})

// app.get("/addItem", function(req, res){
// 	res.json(familyMembers);
// });





app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

