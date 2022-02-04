var fs = require('fs');

fs.readFile('terms.txt', 'utf8', function(err, data){

    var newValue = data.replace('19', '20');
    fs.writeFile('editFile.txt', newValue, function(){
    console.log(newValue);
    });

});

console.log('You have modified the file ');