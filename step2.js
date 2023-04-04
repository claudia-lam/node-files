"use strict"

const fsP = require("fs/promises");
const http = require("http");

async function cat(path) {
  try {
    let contents = await fsP.readFile(path, "utf8");
    console.log("file contents", contents);
  } catch(err) {
    process.exit(1);
  }

}

cat("one.txt");

async function webCat(url) {
    try {
        let contents = await fsP.readFile(url, "utf8");
        console.log("url contents", contents);
    } catch(err) {
        console.log(err.message)
        process.exit(1);
        
    }
}

webCat("http://google.com")