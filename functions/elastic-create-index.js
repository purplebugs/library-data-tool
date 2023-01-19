import { Client } from "@elastic/elasticsearch";

// Ref https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/introduction.html
// Ref: https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/client-connecting.html
const client = new Client({
  node: "http://localhost:9200",
});

client
  .info()
  .then((response) =>
    console.log("[LOG] Elastic Client connection: ", response)
  )
  .catch((error) => console.error(error));

// TODO use Deichman data
async function run() {
  await client.index({
    index: "game-of-thrones",
    body: {
      character: "Ned Stark",
      quote: "Winter is coming.",
    },
  });

  await client.index({
    index: "game-of-thrones",
    body: {
      character: "Daenerys Targaryen",
      quote: "I am the blood of the dragon.",
    },
  });

  await client.index({
    index: "game-of-thrones",
    body: {
      character: "Tyrion Lannister",
      quote: "A mind needs books like a sword needs whetstone.",
    },
  });

  await client.indices.refresh({ index: "game-of-thrones" });
}

run().catch(console.log);
