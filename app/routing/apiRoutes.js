// API Routes

// 1. Load INITIAL data from file cats.js
var cats = require("../data/cats");

// 2. create and export a function that shares the routing info for API GET requests
module.exports = function(app) {

// 3. INSIDE function app - define your GET routes
// GET request to  display ALL inital cats available for matching (JSON data from cats.js)
app.get("/api/cats", function(req, res) {
  res.json(cats);
});

} // end export

//API POST requests
//Invoked when user submits a form (survey)   
//Get user survey data - determine best CAT match
// app.post("/api/cats", function(req, res) {
//     // req.body hosts is equal to the JSON post sent from the user
//     // This works because of our body parsing middleware
//     var newcat = req.body;
    
//     // Using a RegEx Pattern to remove spaces from newCharacter
//     // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//     newcat.routeName = newcat.name.replace(/\s+/g, "").toLowerCase();
    
//     console.log(newcat);
    
//     cats.push(newcat);
    
//     res.json(newcat);
// });

//} // end app functions

// DIRECTIONS for calculating best match
//    * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
//    * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
//      * Example: 
//        * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
//        * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
//        * Total Difference: **2 + 1 + 2 =** **_5_**
//    * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on. 
// use Math.abs(variable name here - removes - sign));   
// * The closest match will be the user with the least amount of difference.








