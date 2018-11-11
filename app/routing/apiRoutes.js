// API Routes

// 1. Load INITIAL data from file cats.js
var cats = require("../data/cats");
// var bodyParser = require('body-parser');
// var jsonParser = bodyParser.json();
// var urlencodedParser = bodyParser.urlencoded({ extended: false});

////////////////////////////////////////////////////////////////////////////
// 2. define function - takes in user survey scores, returns bestCatName, bestCatPhoto
function getCatMatch(userScores) {
    var holdingArr = [];
    var diff = 0;
    var sumOfDiff = 0;
    var finalCompareArr = [];
    
    var catLength = cats.length;
    console.log("Cat length: " + catLength);
    
    // you have nested arrays, so have nested for loops to get data
    // FOR EACH CAT
    for (i = 0; i < cats.length; i++) {
        
    // FOR EACH RATING ( 10 ratings, each with a value 1-5 )
        for ( j = 0; j < cats[i].scores.length; j++) {
           
            diff = Math.abs((userScores[j] - cats[i].scores[j]));
           
            holdingArr.push(diff);
            
        };
        //holding array holds the difference for each rating between user and CAT
        console.log(holdingArr);
        // add all the difference values to get a total difference PER CAT
        sumOfDiff = holdingArr.reduce((a,b) => a + b, 0);
        console.log(sumOfDiff);
        // push the diff total to array - one value per cat
        finalCompareArr.push(sumOfDiff);
        console.log(finalCompareArr);
       
        // reset work variables 
        holdingArr = [];
        diff = 0;
        sumOfDiff = 0;
        // don't clear this value - finalCompareArr = [];
    
    };
    
    // now that I have the final total differences for each cat, get the smallest number
    Array.min = function(array) {
        return Math.min.apply(Math, array);
    };
    
    var minimumDifference = Array.min(finalCompareArr);
    console.log(minimumDifference);
    
    // now having smallest number - (best matched cat)
    // get its index in finalCompareArr
    // arrayname.indexOf(value in array)
    var bestMatchIndex = finalCompareArr.indexOf(minimumDifference);
    console.log ('Index of Best Match: ' + bestMatchIndex);
    
    // now having bestMatchIndex, use it to retrieve cat name and photo link
    var bestCatName = cats[bestMatchIndex].name;
    var bestCatPhoto = cats[bestMatchIndex].photo;
    
    console.log('Best Cat Name: ' + bestCatName);
    console.log('Best Cat Photo URL: ' + bestCatPhoto);
return {
    bestCatName: bestCatName,
    bestCatPhoto: bestCatPhoto
};

} // end getCatMatch

////////////////////////////////////////////////////////////////////////////





// 3. Creat/export function to share routing info for API GET/POST requests
module.exports = function(app) {
    
    // 3. INSIDE function app which represents EXPRESS - define your GET routes
    // API GET request to  display ALL inital cats available for matching (JSON data from cats.js)
    // this says whenever user goes to the URL: http://localhost:8080/api/cats, then display the data from cats.js in json format
    app.get("/api/cats", function(req, res) {
        res.json(cats);
    });
    
    
    
    // API POST request:
    // 1. retrieves user Survey answers
    // 2. compares them to array of existing cats, determines best Cat match (I have this in another program right now)
    app.post('/api/cats', function(req, res) {
        if (!req.body) return res.sendStatus(400);
        // otherwise get the user's survey data
        var userData = req.body;
        var userName = req.body.name;
        var userPhoto = req.body.photo;
        // var userScores = [];
        var userScores = req.body.scores;
       console.log("req.body survey name: " + userName); 
       console.log("req.body survey photo: " + userPhoto); 
       console.log("req.body survey scores: " + req.body.scores); 
       console.log("req.body survey scores: " + userScores[0]);
// at this point, I have the user's survey data and the userScores are in an array userScores
// now perform logic to find best cat match

        var matchData = getCatMatch(userScores);
        //console.log(getCatMatch.bestCatName + " " + getCatMatch.bestCatPhoto);
        console.log("match name: " + matchData.bestCatName);
        console.log("match photo: " + matchData.bestCatPhoto);
// end logic to find best cat match        
        // use this after get best cat match - res.json MUST recieve an object so is why var result is created
         var result = {
            "name": matchData.bestCatName,
           // "name": userName,
            "photo": matchData.bestCatPhoto
           // "photo": userPhoto,
           // "scores": userScores
        }
       res.json(result)
        console.log("Result: " + result.name);    // name user entered
        console.log("Result: " + result.photo); // path user entered
   });
      
} // END EXPORTS/app function








