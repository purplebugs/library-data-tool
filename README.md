# Libraries Data Tool 📚 ⚒️

Convert data from library and related databases to formats to easily ingest into Elasticsearch

## Purpose 💖

Personal learning project to experiment with various solutions

## Workflow 🛤️

- Works: Book, Music, Film
- Persons: Author

```mermaid
graph LR;
    DATA_SOURCE_Library1_Works-->libraries-data-tool;
    DATA_SOURCE_Library2_Works-->libraries-data-tool;
    DATA_SOURCE_Metadata_generator_for_works-->libraries-data-tool;
    libraries-data-tool-->Elasticsearch;
    Elasticsearch-->Elastic_index_Works;
    Elasticsearch-->Elastic_index_Persons;
    Elasticsearch-->Elastic_index_Libraries;
```

## Credits 👏

- Example works data from [Deichman](https://deichman.no/)

## License 📝

The work is under exclusive copyright by default.
