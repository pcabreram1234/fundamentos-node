const momento = require("moment");

let ahora = momento();
let newDate = new Date();
newDate.setDate(40);
console.log(ahora.toString());
console.log(ahora.format("YYYY-MM-DD"));
