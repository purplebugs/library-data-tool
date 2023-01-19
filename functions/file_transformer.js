export default async function fileTransformer(file, bulkSyntax) {
  // Loop over all items

  const myOutput = [];

  for await (const item of file) {
    // convert each item to a JSON string

    if (bulkSyntax) {
      // For Elasticsearch POST /_bulk body format
      //[{ create: {} }, alpacaDocument_1, { create: {} }, alpacaDocument_2],

      myOutput.push({ create: {} });
      myOutput.push(item);
    } else {
      // conveniently stringify also removes spaces
      myOutput.push(JSON.stringify(item));
    }
    //console.log(myOutput);
  }
  return myOutput;
}
