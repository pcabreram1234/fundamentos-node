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

console.log("Inciando el proceso...");
hola("Phillip")
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios())
  .then(() => {
    console.log("Terminando el proceso");
  })
  .catch((err) => {
    console.log(`Ha ocurrido el error ${err}`);
  });
