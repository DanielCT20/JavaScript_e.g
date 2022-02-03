
var fs = require('fs')
let fileString=fs.readFileSync("link.txt").toString();


fileString=fileString.replace(/href="/g,"");
fileString=fileString.replace(/">/g,";");
fileString=fileString.replace(/ /g, "");  //elimina las lineas en blacno//
fileString=fileString.replace(/\s+/g,"\n"); //elimina todo el espacio en blanco luego le da un salto de linea

fileString=fileString.replace(/&amp/g,"");

// fileString=fileString.split(/;/);

fs.writeFileSync("output.txt",fileString);
console.log("Success")


