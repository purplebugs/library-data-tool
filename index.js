import { writeFileSync } from "fs";
import fileReader from "./functions/file_reader.js";
import fileTransformer from "./functions/file_transformer.js";

const now = Date.now().toString();

// JSON -> NDJSON

// Edit this file name as needed
const jsonFileToConvertToNDJSON = "works.json";

const myParsedFile = fileReader(jsonFileToConvertToNDJSON);
const myOutput = await fileTransformer(myParsedFile);

// joining all items in the array with new lines to form NDJSON
let myOutputFileContents = myOutput.join("\n");

writeFileSync(`./data/out/works_${now}.ndjson`, myOutputFileContents);
