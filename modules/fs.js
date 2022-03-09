const fs = require("fs");

function leer(ruta, cb) {
  fs.readFile(ruta, (err, data) => {
    console.log(data.toString());
  });
}

function escribir(ruta, contenido, cb) {
  fs.writeFile(ruta, contenido, (err, data) => {
    if (err) {
      console.error("No he podido escribirlo");
    } else {
      console.log(`Se ha escrito correctamente al archivo ${contenido}`);
    }
  });
}

function borrar(ruta, cb) {
  fs.unlink(ruta, cb);
}

/* escribir(__dirname + "/archivo1.txt", "Soy un archivo nuevo", console.log); */
/* leer(__dirname + "/archivo.txt", console.log); */
borrar(__dirname + "/archivo1.txt", console.log);
