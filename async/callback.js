function soyAsincrona() {
  console.log("Hola, soy una funcion asincronca");
  setTimeout(() => {
    console.log("Estoy siendo asincrona");
  }, 1000);
}

soyAsincrona();
