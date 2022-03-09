function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Hola ${nombre}`);
      resolve(nombre);
    }, 1500);
  });
}

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Adios, ${nombre}`);
      resolve();
    }, 1000);
  });
}

function hablar() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Bla bla bla bla...");
      resolve();
      /* reject("Hay un error"); */
    }, 1000);
  });
}

async function main() {
  await hola("Phillip");
  await hablar();
  await adios("Phillip");
  console.log("Terminamos el proceso...");
}
console.log("Empezamos el proceso...");
main();
console.log("Va a ser la segunda instruccion");
