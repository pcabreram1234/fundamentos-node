function otraFuncion() {
  return seRompe();
}

function seRompe() {
  return 3 + z;
}

function seRompeAsincrona(cb) {
  setTimeout(() => {
    try {
      return 3 + z;
    } catch (err) {
      cb(err);
      console.log("Error en funcion asincrona");
    }
  }, 1000);
}

try {
  seRompeAsincrona(function () {
    console.log("Hay error");
  });
} catch (err) {
  console.error("Vaya algo se ha roto");
  console.error(err.message);
  console.log("Pero no pasa nada, lo hemos capturado");
}

console.log("Esto de aqui esta al final");
