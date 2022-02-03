var fs = require('fs');
var stream = fs.createWriteStream("myfile.txt");

stream.once('open', (fd) => {
    stream.write("First line\n");
    stream.write("Second line\n");

    // Importante para cerrar la transmisión cuando estés listo
    stream.end();
});