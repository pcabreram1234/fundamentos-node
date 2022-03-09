const puppeteer = require("puppeteer");

/* Todos los metodos de la dependencia puppeter
funcionan de manera asincrona */

/* Al no colocarle nombre a la funcion 
y encerrarla toda entre parentesis y luego colocar los 
dos parentesis hace que la funcion anonima se ejecute */
(async () => {
  /* Todo nuestro codigo */

  console.log("Lanzamos navegador");
  /*   const browser = await puppeteer.launch(); */

  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://twitter.com/home");

  var titulo1 = await page.evaluate(() => {
    const h1 = document.querySelector("html");
    console.log(h1.innerHTML);
    return h1.innerHTML;
  });

  console.log(titulo1);
  console.log("Cerramos navegador...");
  /*   browser.close(); */
  console.log("Navegador cerrado");
})();
