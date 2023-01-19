import fileReader from "./functions/file_reader.js";
import fileTransformer from "./functions/file_transformer.js";
import createIndexWithDocuments from "./functions/elastic_commands.js";

// Edit this file name as needed
const jsonFileToConvertToNDJSON = "works.json";

const myParsedFile = fileReader(jsonFileToConvertToNDJSON);
const myOutput = await fileTransformer(myParsedFile, true);

await createIndexWithDocuments(myOutput);
