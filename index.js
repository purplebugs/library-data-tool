import { readFileSync, writeFileSync } from "fs";
import fileReader from "./functions/file_reader.js";

const now = Date.now().toString();
const myOutput = [];

// JSON -> NDJSON

// Edit this file name as needed
const jsonFileToConvertToNDJSON = "works.json";

const myParsedFile = fileReader(jsonFileToConvertToNDJSON);
myParsedFile.forEach((item) => {
  myOutput.push(JSON.stringify(item));
});

// joining all items in the array with new lines to form NDJSON
let myOutputFileContents = myOutput.join("\n");

writeFileSync(`./data/out/works-${now}.ndjson`, myOutputFileContents);
