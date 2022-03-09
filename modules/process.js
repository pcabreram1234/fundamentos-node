/* const process = require("process"); */

process.on("beforeExit", () => {
  console.log("Ale, el proceso va a terminar");
});

process.on("exit", () => {
  console.log("Ale, el proceso termino");
});

process.on("uncaughtException", (err, source) => {
  console.error(`Vaya se nos ha olvidado capturar un error`);
  console.error(err);
  setTimeout(() => {
    console.log("Esto viene de las excepciones");
  }, 0);
});

functionQ();

console.log("Esto si es el error no se recoge no sale");
