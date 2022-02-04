var fs = require("fs");

fs.stat('read.txt', function(err) {
  if (err == null) {
    console.log("El archivo existe");
  } else if (err.code == 'ENOENT') {
    console.log("el archivo no existe");
  } else {
    console.log(err); // ocurrió algún error
  }
})