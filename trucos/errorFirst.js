function asincrona(callback) {
  setTimeout(() => {
    try {
      let a = 3 + z;
      callback(null, a);
    } catch (e) {
      callback(e, null);
    }
  }, 1000);
}

asincrona((err, data) => {
  if (err) {
    console.error("Tenemos un error");
    console.log(err);
    return false;
 /*    throw err; */ //En funciones asincronas la sintaxis throw err no funciona
  }
  console.log(`Toda ha ido bien mi data es ${data}`);
});
