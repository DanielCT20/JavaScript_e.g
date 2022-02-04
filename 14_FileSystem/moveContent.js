var fs = require('fs');

fs.mkdir('theme2', function(){

    fs.readFile('terms.txt', 'utf8', function(err, data){    
        fs.writeFileSync('./theme2/copyContent1.txt', data);
    });
    
 });