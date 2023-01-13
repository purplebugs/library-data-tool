import { readFileSync, writeFileSync } from "fs";

// JSON -> NDJSON
const now = Date.now().toString();
const myOutput = [];

// Edit this file name as needed
const jsonFileToConvertToNDJSON = "works.json";

// Read file from disk
const myFile = readFileSync(`./data/in/${jsonFileToConvertToNDJSON}`);

// Parse file
const myParsedFile = JSON.parse(myFile);

myParsedFile.forEach((item) => {
  myOutput.push(JSON.stringify(item));
});

// joining all items in the array with new lines to form NDJSON
const myOutputFileContents = myOutput.join("\n");

writeFileSync(`./data/out/works-${now}.ndjson`, myOutputFileContents);
