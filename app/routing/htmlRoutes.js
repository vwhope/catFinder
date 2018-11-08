// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
// provide access to these routes through exporting function named app
module.exports = function(app) {
  
  // app.get defines a route's endpoint 
  // is triggered when user visits a path 
  // the path/route points the browser to a specific html page
  // the browser will respond with html page if available, if not will default to home page
  // here order matters?
  
  // route for HTML Survey page
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  
  // default catch-all route takes you to home page 
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  
};
