const fs = require("fs");
const stream = require("stream");
const path = require("path");
const util = require("util");

let data = "";

let readableStream = fs.createReadStream(__dirname + "/input.txt");

/* readableStream.on("data", (chunk) => {
  readableStream.setEncoding("utf8");
  data += chunk;
});


process.stdout.write("hola");
 */

const Transform = stream.Transform;

function UpperCas() {
  Transform.call(this);
}

util.inherits(UpperCas, Transform);

UpperCas.prototype._transform = function (chunk, codif, cb) {
  chunkUpper = chunk.toString().toUpperCase();
  this.push(chunkUpper);
  cb();
};

let mayus = new UpperCas();

readableStream.pipe(mayus).pipe(process.stdout);
