/* Las variables globales son entidades que vienen predefinadas en NodeJS */
/* Las cuales pueden ser accedidas sin tener que hacer un require o import */

const path = require("path");
console.log(path.join(__dirname, "src"));
