// Import the express framework
var express = require('express');
// import fs framework
var fs = require('fs');

// Create an instance of the express app
app = express();

// Express: GET method 
app.get('/:numCopies', function(req, resp){

    // access numCopies w/ 'req.params'
    const numCopies = parseInt(req.params.numCopies);

    // read the file
    fs.readFile('original.txt', 'utf8', function(err, data) {
        // loop to create copies
        for(let i = 0; i < numCopies; i++) {
            const fileName = `copy_${i + 1}.txt`;
            fs.writeFile(fileName, data, () => console.log(`File ${fileName} created.`));
        }
        // display the # of copies
        resp.send(`Number of copies: ${numCopies}`);
    });
});

// listen to port 3000
app.listen(3000);
console.log("This is running");