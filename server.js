//==============================================================
// Server.js is the main entry point for the catFinder app
//==============================================================
//
// Dependencies - (npm packages)
// =============================================================
// 
var express = require("express");
//var bodyParser = require('body-parser'); // used to format requests and responses
var path = require("path"); // you don't install this, just require it, it is included in Node.js
// path formats url path info when delivering html to users  - use it in your routing. Ex.  (res.sendFile(path.join(__dirname, "yourfile.html")); 

// Set up Express, and PORT to listen for incoming user requests
// =============================================================
var app = express(); // app is now the wrapper for express, to access Express properties like GET and POST
var PORT = process.env.PORT || 8080; // the port will be EITHER what Heroku decides or locally port 8080

// Sets up the Express app to handle data parsing - am using bodyParser to do this instead of express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets up the body-Parser application
// app.use(bodyParser.json()); // support json encoded body
// app.use(bodyParser.urlencoded({ extended: false })); // this was false, support encoded body

//app.use(bodyParser.json({ type: 'application/*+json' }));
//app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
//app.use(bodyParser.text({ type: 'text/html' }));

// ROUTING
// points server to the various JavaScript routing files
// they are put here AFTER Express app variable is created and setup for parsing
// the code below is the same as: var apiRoutes = require("./app/routing/apRoutes") apiRoutes(app)
// but since this will only be done once, there is no reason to store it in a variable
// put the apiRoutes first in this list

require('./app/routing/apiRoutes')(app); // js file with routes for serving data to and from the client
require('./app/routing/htmlRoutes')(app); // js file with routes for serving HTML pages

// "Starts" the server by "listening" to a specific port # for incoming requests
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

