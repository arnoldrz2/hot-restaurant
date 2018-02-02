var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


// Sets up the Express App
// =============================================================
var app = express();
//var PORT = 3000;
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var reservations = [
  {
    routeName: "arnold",
    name: "Arnold",
    phoneNumber: "512-555-5555",
    email: "arnold@test.com",
    uniqueId: "blah"
  }


];

var waitlist = []


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page. This is the main page.
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

//This is the page where you can view the reservations already made.
app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

//This is the page where you can make reservations
app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

// Create New Reservations - takes in JSON input
app.post("/reserve/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newreservation = req.body;
  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newreservation.routeName = newreservation.name.replace(/\s+/g, "").toLowerCase();

  console.log(newreservation);

  characters.push(newreservation);

  res.json(newreservation);
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
