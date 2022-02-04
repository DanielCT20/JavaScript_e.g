var fs = require('fs');

var stream = fs.createWriteStream("writeStream.txt");
stream.once('open', function(fd) {
  stream.write("Primera línea\n");
  stream.write("Segunda línea\n");
  stream.end();
});