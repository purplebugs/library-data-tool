//import dotenv from "dotenv";
//const config = dotenv.config();
import { Client } from "@elastic/elasticsearch";

// Ref https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/introduction.html

// Ref: https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/client-connecting.html
const client = new Client({
  node: "http://localhost:9200",
  //   auth: {
  //     username: process.env.ELASTIC_USERNAME,
  //     password: process.env.ELASTIC_PASSWORD,
  //   },
});

client
  .info()
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
