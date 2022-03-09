const { exec, spawn } = require("child_process");

/* exec("node modules/consola.js", (err, stdout, sderr) => {
  if (err) {
    console.error(err);
    return false;
  }
  console.log(stdout);
}); */

let proceso = spawn("ls", ["-la"]);

/* console.log(proceso); */
proceso.stdout.on("data", (dato) => {
  console.log("Esta muerto?");
  console.log(proceso.killed);
  console.log(dato.toString());
});

proceso.on("exit", () => {
  console.log("El proceso termino");
});
