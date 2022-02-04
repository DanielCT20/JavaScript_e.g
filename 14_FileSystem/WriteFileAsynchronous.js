var fs = require('fs');

var terms = fs.readFileSync('terms.txt', 'utf8');

fs.writeFile('WriteFileAsynchronous.txt', terms, function(err, data){

console.log('The terms are on this file');

});

console.log('You have created a copy from terms ');