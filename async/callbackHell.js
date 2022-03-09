function hola(nombre, miCallback) {
  setTimeout(() => {
    console.log(`Hola ${nombre}`);
    miCallback(nombre);
  }, 1500);
}

function adios(nombre, otroCallback) {
  setTimeout(() => {
    console.log(`Adios, ${nombre}`);
    otroCallback();
  }, 1000);
}

function hablar(callBackHablar) {
  setTimeout(() => {
    console.log("Bla bla bla bla...");
    callBackHablar();
  }, 1000);
}

console.log("Iniciando proceso...");

function conversacion(nombre, veces, callback) {
    
}

/* hola("Phillip", (nombre) => {
  adios(nombre, () => {
    console.log("Terminamos");
  });
});
 */

/* hola("Philip", function () {
  hablar(() => {
    hablar(() => {
      console.log("Estoy hablando contigo ");
    });
    adios("Phillip", function () {
      console.log("Terminando proceso");
    });
  });
}); */
