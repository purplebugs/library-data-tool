# Library Data Tool π βοΈ

Convert data from library and related databases to formats to easily ingest into Elasticsearch

## Purpose π

Personal learning project to experiment with various solutions

## Workflow π€οΈ

- Works: Book, Music, Film
- Persons: Author

```mermaid
flowchart LR;
    DATA_SOURCE_Library1_Works-->PubSub;
    DATA_SOURCE_Library2_Works-->PubSub;
    DATA_SOURCE_Metadata_generator_for_works-->PubSub;
    PubSub-->library-data-tool:::highlightclass;
    library-data-tool-->Elasticsearch;
    Elasticsearch-->Elastic_index_Works;
    Elasticsearch-->Elastic_index_Persons;
    Elasticsearch-->Elastic_index_Libraries;
    classDef highlightclass fill:#f96
```

## 1. Setup π€

Pre-condition πͺ΄

`npm install`

### Get Elasticsearch up and running locally

- Install Docker compose / Docker Desktop

- Navigate to the elasticsearch folder and run the docker-compose file `docker-compose up`

Stopping Elasticsearch

- To stop and preserve data `docker-compose down`

- To stop and delete data `docker-compose down -v`

To take advantage of the Norwegian Hunspell, and decompounder take a look at the provided example index template.

## 2. Use the app π

### JSON -> NDJSON -> import file to Elasticsearch πΎ

1. Run `node index`
2. Look for the generated file in [data/out](data/out)
3. Import this file to Elasticsearch

### JSON -> Elasticsearch client -> auto create index π€

1. Create index in Elasticsearch from existing JSON file: `node elastic_bulk.js`
2. Verify the index was created in Elasticsearch Dev Tools: `GET library/_search` - note it uses an alias that is updated `GET _alias/library`

## Credits π

- Example works data from [Deichman](https://deichman.no/)

## LicenseΒ π

The work is under exclusive copyright by default.
