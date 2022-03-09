//Las variables de entorno se usan para trabajar con variables que
//Guardan informacion sensible del proyecto, clave a BD, resutladados
//de Fetching, etc..+

//Las variables de entorno como un estandar en la industria se declaran
///UPPERCASE o Mayusculas

let nombre = process.env.NOMBRE || "Sin nombre";
let web = process.env.WEB || "no tengo web";

console.log("Hola " + nombre);
console.log("Mi web es " + web);
console.log("Otra Cosas.. .");
