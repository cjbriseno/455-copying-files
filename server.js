// Import the express framework
var express = require('express');
// import fs framework
var fs = require('fs');

// Create an instance of the express app
app = express();

app.get('/:numCopies', function(req, resp){

    // access numCopies w/ 'req.params'
    var numCopies = parseInt(req.params.numCopies);

    // call copyFile function
    copyFile(numCopies);

    // send # of copies made on screen
    resp.send('Number of copies ${numCopies}')
    });

     // function that takes # of copies as parameter
     function copyFile(numCopies) {
        var contents = fs.readFileSync("original.txt", "utf8");
        // loop to create new files w/ contents of original.txt
        console.log("--copyFile function ran--");
        for (let i = 0; i < numCopies; i++) {
            fs.writeFileSync('copy_${i}.txt', contents);
            console.log("--for loop inside fucntion ran--");
        }
    }

// listen to port 3000
app.listen(3000);
console.log("This is running");