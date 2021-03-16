const asciidoctor = require('asciidoctor')()
const fs = require("fs");
const content = fs.readFileSync("./src/README.adoc","ascii");
const body = asciidoctor.convert(content) // (2)
try {
  fs.writeFileSync("./build/index.html", body);
  console.log("Written html to file: index.html\nExiting...")
} catch(err) {
  throw new Error("Writing html to file failed.\n Exiting...");
}