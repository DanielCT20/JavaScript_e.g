var fs = require('fs');
var terms = fs.readFileSync('terms.txt', 'utf8');
fs.writeFileSync('copy.txt', terms);
console.log('You have created a copy from terms ');


' writeFileSync  the first parameter is the name of the file that you want to create and the second is the content of your file for me in this example I took the content into the variable terms which is the terms of use and this is the result of my copy file'

