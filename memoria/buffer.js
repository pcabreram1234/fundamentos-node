/* let buffer = Buffer.alloc(4); */
/* let buffer = Buffer.from([1, 2, 3]); */

let buffer = Buffer.from("Hola");
console.log(buffer.toString());

let abc = Buffer.alloc(26);

// Hacemos un bucle para asignar a cada item del buffer el codigo ASCII de la letra
// Es decir al sumarle 97 al valor actual de i se obtiene el codigo del caracter en miniscula

for (let i = 0; i < 26; i++) {
  abc[i] = i + 97;
}

console.log(abc.toString());
