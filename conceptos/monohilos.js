console.log("Hola mundo");

let i = 0;

function sendParam() {
  return new Promise((resolve) => {
    setInterval(() => {
      console.log(i);
      i++;

      /*     if (i === 5) {
            console.log("Forzamos el error")
            var a = 3 + z
        } */
    }, 1000); 
  });
}

async function dispatchEvente() {
  const result = await sendParam();
  console.log(result);
}

dispatchEvente();
console.log("Segunda instrucción");
