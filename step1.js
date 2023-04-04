"use strict"

const argv = process.argv;
const fsP = require("fs/promises");

// console.log("argv: ", argv)

async function cat(path) {
  try {
    let contents = await fsP.readFile(path, "utf8");
    console.log("file contents", contents);
  } catch(err) {
    process.exit(1);
  }

}

cat(process.argv[2]);