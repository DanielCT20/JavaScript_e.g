var fs = require('fs');

fs.writeFile("write.txt", "Primera línea\nSegunda línea", function(err) {
  if (err) {
    return console.log(err);
  }

  console.log("El archivo fue creado correctamente");
});