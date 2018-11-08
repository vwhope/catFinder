//==============================================================
// Server.js is the main entry point for the catFinder app
//==============================================================
//
// Dependencies - (npm packages)
// =============================================================
// npm packages
var express = require("express");
var path = require("path");

//var apiRoutes = require("./app/routing/apiRoutes");
//var htmlRoutes = require("./app/routing/htmlRoutes");

// Set up Express and PORT to listen for incoming user requests
// =============================================================
var app = express(); // app is now the wrapper for express, to access Express properties like GET and POST
var PORT = process.env.PORT || 8080; 

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTING
// points server to the various JavaScript routing files
// they are put here AFTER Express app variable is created and setup for parsing
// the code below is the same as: var apiRoutes = require("./app/routing/apRoutes") apiRoutes(app)
// but since this will only be done once, there is no reason to store it in a variable

require('./app/routing/apiRoutes')(app); // js file with routes for serving AJAX response data
require('./app/routing/htmlRoutes')(app); // js file with routes for serving HTML pages

// "Starts" the server by "listening" to a specific port # for incoming requests
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
