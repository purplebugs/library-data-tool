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

const indexName = `library`;
const indexTemplateName = `library_template`;
const indexPatterns = `library-*`;

const template = {
  name: indexTemplateName,
  create: true,
  index_patterns: indexPatterns,
  template: {
    settings: {
      index: {
        analysis: {
          filter: {
            length_filter2: {
              type: "length",
              min: "2",
            },
            length_filter3: {
              type: "length",
              min: "3",
            },
            no_stop_filter: {
              type: "stop",
              stopwords: ["_norwegian_"],
            },
            no_lemma: {
              locale: "nb_NO",
              type: "hunspell",
            },
            word_delimiter_filter: {
              type: "word_delimiter_graph",
              preserve_original: "true",
            },
            decompounder_filter: {
              word_list_path: "analysis/decompounder/compounds.txt",
              max_subword_size: "20",
              min_word_size: "5",
              type: "hyphenation_decompounder",
              hyphenation_patterns_path: "analysis/decompounder/nb.xml",
              min_subword_size: "3",
            },
            autocomplete_filter: {
              type: "edge_ngram",
              min_gram: "2",
              max_gram: "20",
            },
          },
          analyzer: {
            no_example_analyzer: {
              filter: [
                "lowercase",
                "word_delimiter_filter",
                "no_lemma",
                "no_stop_filter",
              ],
              type: "custom",
              tokenizer: "whitespace",
            },
          },
        },
      },
    },
    mappings: {
      _meta: {
        created_by: "file-data-visualizer",
      },
      properties: {
        "@timestamp": {
          type: "date",
        },
        ageLimit: {
          type: "long",
        },
        agents: {
          properties: {
            authors: {
              type: "text",
              fields: {
                keyword: {
                  type: "keyword",
                  ignore_above: 256,
                },
              },
            },
            photographers: {
              type: "text",
              fields: {
                keyword: {
                  type: "keyword",
                  ignore_above: 256,
                },
              },
            },
            translators: {
              type: "text",
              fields: {
                keyword: {
                  type: "keyword",
                  ignore_above: 256,
                },
              },
            },
          },
        },
        agentsInfo: {
          properties: {
            authors: {
              properties: {
                id: {
                  type: "text",
                  fields: {
                    keyword: {
                      type: "keyword",
                      ignore_above: 256,
                    },
                  },
                },
                label: {
                  type: "text",
                  fields: {
                    keyword: {
                      type: "keyword",
                      ignore_above: 256,
                    },
                  },
                },
                number: {
                  type: "text",
                  fields: {
                    keyword: {
                      type: "keyword",
                      ignore_above: 256,
                    },
                  },
                },
                slug: {
                  type: "text",
                  fields: {
                    keyword: {
                      type: "keyword",
                      ignore_above: 256,
                    },
                  },
                },
                type: {
                  type: "text",
                  fields: {
                    keyword: {
                      type: "keyword",
                      ignore_above: 256,
                    },
                  },
                },
                uri: {
                  type: "text",
                  fields: {
                    keyword: {
                      type: "keyword",
                      ignore_above: 256,
                    },
                  },
                },
              },
            },
            photographers: {
              properties: {
                id: {
                  type: "text",
                  fields: {
                    keyword: {
                      type: "keyword",
                      ignore_above: 256,
                    },
                  },
                },
                label: {
                  type: "text",
                  fields: {
                    keyword: {
                      type: "keyword",
                      ignore_above: 256,
                    },
                  },
                },
                number: {
                  type: "text",
                  fields: {
                    keyword: {
                      type: "keyword",
                      ignore_above: 256,
                    },
                  },
                },
                slug: {
                  type: "text",
                  fields: {
                    keyword: {
                      type: "keyword",
                      ignore_above: 256,
                    },
                  },
                },
                type: {
                  type: "text",
                  fields: {
                    keyword: {
                      type: "keyword",
                      ignore_above: 256,
                    },
                  },
                },
                uri: {
                  type: "text",
                  fields: {
                    keyword: {
                      type: "keyword",
                      ignore_above: 256,
                    },
                  },
                },
              },
            },
            translators: {
              properties: {
                id: {
                  type: "text",
                  fields: {
                    keyword: {
                      type: "keyword",
                      ignore_above: 256,
                    },
                  },
                },
                label: {
                  type: "text",
                  fields: {
                    keyword: {
                      type: "keyword",
                      ignore_above: 256,
                    },
                  },
                },
                number: {
                  type: "text",
                  fields: {
                    keyword: {
                      type: "keyword",
                      ignore_above: 256,
                    },
                  },
                },
                slug: {
                  type: "text",
                  fields: {
                    keyword: {
                      type: "keyword",
                      ignore_above: 256,
                    },
                  },
                },
                type: {
                  type: "text",
                  fields: {
                    keyword: {
                      type: "keyword",
                      ignore_above: 256,
                    },
                  },
                },
                uri: {
                  type: "text",
                  fields: {
                    keyword: {
                      type: "keyword",
                      ignore_above: 256,
                    },
                  },
                },
              },
            },
          },
        },
        allAgents: {
          type: "keyword",
        },
        author: {
          type: "keyword",
        },
        availableBranches: {
          type: "keyword",
        },
        coverImage: {
          type: "keyword",
        },
        created: {
          type: "date",
          format: "iso8601",
        },
        deleted: {
          type: "boolean",
        },
        displaySeries: {
          properties: {
            label: {
              type: "text",
              fields: {
                keyword: {
                  type: "keyword",
                  ignore_above: 256,
                },
              },
            },
            num: {
              type: "text",
              fields: {
                keyword: {
                  type: "keyword",
                  ignore_above: 256,
                },
              },
            },
          },
        },
        editor: {
          type: "keyword",
        },
        flags: {
          type: "keyword",
        },
        fullTitle: {
          type: "text",
          fields: {
            norwegian: {
              type: "text",
              analyzer: "no_example_analyzer",
            },
          },
        },
        hiddenSearchables: {
          type: "keyword",
        },
        homeBranches: {
          type: "keyword",
        },
        id: {
          type: "keyword",
        },
        ids: {
          type: "keyword",
        },
        images: {
          properties: {
            fallbackColor: {
              type: "text",
              fields: {
                keyword: {
                  type: "keyword",
                  ignore_above: 256,
                },
              },
            },
            hasAllSizes: {
              type: "boolean",
            },
            large: {
              type: "text",
              fields: {
                keyword: {
                  type: "keyword",
                  ignore_above: 256,
                },
              },
            },
            largest: {
              type: "text",
              fields: {
                keyword: {
                  type: "keyword",
                  ignore_above: 256,
                },
              },
            },
            medium: {
              type: "text",
              fields: {
                keyword: {
                  type: "keyword",
                  ignore_above: 256,
                },
              },
            },
            small: {
              type: "text",
              fields: {
                keyword: {
                  type: "keyword",
                  ignore_above: 256,
                },
              },
            },
            useFallback: {
              type: "boolean",
            },
          },
        },
        issuesByYear: {
          type: "object",
        },
        issuesTotal: {
          type: "long",
        },
        kohaPopularity: {
          type: "long",
        },
        languages: {
          type: "keyword",
        },
        likes: {
          type: "long",
        },
        locationClassNumber: {
          type: "double",
        },
        locations: {
          type: "keyword",
        },
        mainTitle: {
          type: "keyword",
          fields: {
            norwegian: {
              type: "text",
              analyzer: "no_example_analyzer",
            },
          },
        },
        mediaType: {
          type: "keyword",
        },
        numItems: {
          type: "long",
        },
        numberOfPagesCosmetic: {
          type: "long",
        },
        otherPublications: {
          properties: {
            languages: {
              type: "text",
              fields: {
                keyword: {
                  type: "keyword",
                  ignore_above: 256,
                },
              },
            },
          },
        },
        partNumber: {
          type: "long",
        },
        partTitle: {
          type: "keyword",
        },
        photographer: {
          type: "keyword",
        },
        publicationYear: {
          type: "long",
        },
        publishedBy: {
          type: "keyword",
        },
        recommended: {
          type: "boolean",
        },
        recordId: {
          type: "long",
        },
        reservesByYear: {
          type: "object",
        },
        serialInfo: {
          properties: {
            id: {
              type: "text",
              fields: {
                keyword: {
                  type: "keyword",
                  ignore_above: 256,
                },
              },
            },
            label: {
              type: "text",
              fields: {
                keyword: {
                  type: "keyword",
                  ignore_above: 256,
                },
              },
            },
            number: {
              type: "text",
              fields: {
                keyword: {
                  type: "keyword",
                  ignore_above: 256,
                },
              },
            },
            slug: {
              type: "text",
              fields: {
                keyword: {
                  type: "keyword",
                  ignore_above: 256,
                },
              },
            },
            type: {
              type: "text",
              fields: {
                keyword: {
                  type: "keyword",
                  ignore_above: 256,
                },
              },
            },
            uri: {
              type: "text",
              fields: {
                keyword: {
                  type: "keyword",
                  ignore_above: 256,
                },
              },
            },
          },
        },
        series: {
          type: "keyword",
        },
        shelfMark: {
          type: "keyword",
        },
        subtitle: {
          type: "text",
          fields: {
            norwegian: {
              type: "text",
              analyzer: "no_example_analyzer",
            },
          },
        },
        titleAll: {
          type: "text",
          fields: {
            norwegian: {
              type: "text",
              analyzer: "no_example_analyzer",
            },
          },
        },
        translator: {
          type: "keyword",
        },
        uri: {
          type: "keyword",
        },
        various: {
          type: "text",
        },
        work: {
          properties: {
            agents: {
              properties: {
                authors: {
                  type: "text",
                  fields: {
                    keyword: {
                      type: "keyword",
                      ignore_above: 256,
                    },
                  },
                },
                editors: {
                  type: "text",
                  fields: {
                    keyword: {
                      type: "keyword",
                      ignore_above: 256,
                    },
                  },
                },
                publishers: {
                  type: "text",
                  fields: {
                    keyword: {
                      type: "keyword",
                      ignore_above: 256,
                    },
                  },
                },
              },
            },
            agentsInfo: {
              properties: {
                authors: {
                  properties: {
                    id: {
                      type: "text",
                      fields: {
                        keyword: {
                          type: "keyword",
                          ignore_above: 256,
                        },
                      },
                    },
                    label: {
                      type: "text",
                      fields: {
                        keyword: {
                          type: "keyword",
                          ignore_above: 256,
                        },
                      },
                    },
                    number: {
                      type: "text",
                      fields: {
                        keyword: {
                          type: "keyword",
                          ignore_above: 256,
                        },
                      },
                    },
                    slug: {
                      type: "text",
                      fields: {
                        keyword: {
                          type: "keyword",
                          ignore_above: 256,
                        },
                      },
                    },
                    type: {
                      type: "text",
                      fields: {
                        keyword: {
                          type: "keyword",
                          ignore_above: 256,
                        },
                      },
                    },
                    uri: {
                      type: "text",
                      fields: {
                        keyword: {
                          type: "keyword",
                          ignore_above: 256,
                        },
                      },
                    },
                  },
                },
                editors: {
                  properties: {
                    id: {
                      type: "text",
                      fields: {
                        keyword: {
                          type: "keyword",
                          ignore_above: 256,
                        },
                      },
                    },
                    label: {
                      type: "text",
                      fields: {
                        keyword: {
                          type: "keyword",
                          ignore_above: 256,
                        },
                      },
                    },
                    number: {
                      type: "text",
                      fields: {
                        keyword: {
                          type: "keyword",
                          ignore_above: 256,
                        },
                      },
                    },
                    slug: {
                      type: "text",
                      fields: {
                        keyword: {
                          type: "keyword",
                          ignore_above: 256,
                        },
                      },
                    },
                    type: {
                      type: "text",
                      fields: {
                        keyword: {
                          type: "keyword",
                          ignore_above: 256,
                        },
                      },
                    },
                    uri: {
                      type: "text",
                      fields: {
                        keyword: {
                          type: "keyword",
                          ignore_above: 256,
                        },
                      },
                    },
                  },
                },
                publishers: {
                  properties: {
                    id: {
                      type: "text",
                      fields: {
                        keyword: {
                          type: "keyword",
                          ignore_above: 256,
                        },
                      },
                    },
                    label: {
                      type: "text",
                      fields: {
                        keyword: {
                          type: "keyword",
                          ignore_above: 256,
                        },
                      },
                    },
                    number: {
                      type: "text",
                      fields: {
                        keyword: {
                          type: "keyword",
                          ignore_above: 256,
                        },
                      },
                    },
                    slug: {
                      type: "text",
                      fields: {
                        keyword: {
                          type: "keyword",
                          ignore_above: 256,
                        },
                      },
                    },
                    type: {
                      type: "text",
                      fields: {
                        keyword: {
                          type: "keyword",
                          ignore_above: 256,
                        },
                      },
                    },
                    uri: {
                      type: "text",
                      fields: {
                        keyword: {
                          type: "keyword",
                          ignore_above: 256,
                        },
                      },
                    },
                  },
                },
              },
            },
            audiences: {
              type: "text",
              fields: {
                keyword: {
                  type: "keyword",
                  ignore_above: 256,
                },
              },
            },
            biography: {
              type: "text",
              fields: {
                keyword: {
                  type: "keyword",
                  ignore_above: 256,
                },
              },
            },
            deweyNumbers: {
              type: "text",
              fields: {
                keyword: {
                  type: "keyword",
                  ignore_above: 256,
                },
              },
            },
            fictionNonfiction: {
              type: "text",
              fields: {
                keyword: {
                  type: "keyword",
                  ignore_above: 256,
                },
              },
            },
            genres: {
              type: "text",
              fields: {
                keyword: {
                  type: "keyword",
                  ignore_above: 256,
                },
              },
            },
            id: {
              type: "text",
              fields: {
                keyword: {
                  type: "keyword",
                  ignore_above: 256,
                },
              },
            },
            languages: {
              type: "text",
              fields: {
                keyword: {
                  type: "keyword",
                  ignore_above: 256,
                },
              },
            },
            literaryForms: {
              type: "text",
              fields: {
                keyword: {
                  type: "keyword",
                  ignore_above: 256,
                },
              },
            },
            mainEntry: {
              type: "text",
              fields: {
                keyword: {
                  type: "keyword",
                  ignore_above: 256,
                },
              },
            },
            mainEntryInfo: {
              properties: {
                id: {
                  type: "text",
                  fields: {
                    keyword: {
                      type: "keyword",
                      ignore_above: 256,
                    },
                  },
                },
                label: {
                  type: "text",
                  fields: {
                    keyword: {
                      type: "keyword",
                      ignore_above: 256,
                    },
                  },
                },
                number: {
                  type: "text",
                  fields: {
                    keyword: {
                      type: "keyword",
                      ignore_above: 256,
                    },
                  },
                },
                slug: {
                  type: "text",
                  fields: {
                    keyword: {
                      type: "keyword",
                      ignore_above: 256,
                    },
                  },
                },
                type: {
                  type: "text",
                  fields: {
                    keyword: {
                      type: "keyword",
                      ignore_above: 256,
                    },
                  },
                },
                uri: {
                  type: "text",
                  fields: {
                    keyword: {
                      type: "keyword",
                      ignore_above: 256,
                    },
                  },
                },
              },
            },
            mainEntryNationalities: {
              type: "text",
              fields: {
                keyword: {
                  type: "keyword",
                  ignore_above: 256,
                },
              },
            },
            mainTitle: {
              type: "text",
              fields: {
                keyword: {
                  type: "keyword",
                  ignore_above: 256,
                },
                norwegian: {
                  type: "text",
                  analyzer: "no_example_analyzer",
                },
              },
            },
            publicationYear: {
              type: "long",
            },
            subjects: {
              type: "text",
              fields: {
                keyword: {
                  type: "keyword",
                  ignore_above: 256,
                },
              },
            },
            subjectsInfo: {
              properties: {
                id: {
                  type: "text",
                  fields: {
                    keyword: {
                      type: "keyword",
                      ignore_above: 256,
                    },
                  },
                },
                label: {
                  type: "text",
                  fields: {
                    keyword: {
                      type: "keyword",
                      ignore_above: 256,
                    },
                  },
                },
                number: {
                  type: "text",
                  fields: {
                    keyword: {
                      type: "keyword",
                      ignore_above: 256,
                    },
                  },
                },
                slug: {
                  type: "text",
                  fields: {
                    keyword: {
                      type: "keyword",
                      ignore_above: 256,
                    },
                  },
                },
                type: {
                  type: "text",
                  fields: {
                    keyword: {
                      type: "keyword",
                      ignore_above: 256,
                    },
                  },
                },
                uri: {
                  type: "text",
                  fields: {
                    keyword: {
                      type: "keyword",
                      ignore_above: 256,
                    },
                  },
                },
              },
            },
            type: {
              type: "text",
              fields: {
                keyword: {
                  type: "keyword",
                  ignore_above: 256,
                },
              },
            },
            uri: {
              type: "text",
              fields: {
                keyword: {
                  type: "keyword",
                  ignore_above: 256,
                },
              },
            },
          },
        },
        workSeriesInfo: {
          properties: {
            id: {
              type: "text",
              fields: {
                keyword: {
                  type: "keyword",
                  ignore_above: 256,
                },
              },
            },
            label: {
              type: "text",
              fields: {
                keyword: {
                  type: "keyword",
                  ignore_above: 256,
                },
              },
            },
            number: {
              type: "text",
              fields: {
                keyword: {
                  type: "keyword",
                  ignore_above: 256,
                },
              },
            },
            slug: {
              type: "text",
              fields: {
                keyword: {
                  type: "keyword",
                  ignore_above: 256,
                },
              },
            },
            type: {
              type: "text",
              fields: {
                keyword: {
                  type: "keyword",
                  ignore_above: 256,
                },
              },
            },
            uri: {
              type: "text",
              fields: {
                keyword: {
                  type: "keyword",
                  ignore_above: 256,
                },
              },
            },
          },
        },
      },
    },
    aliases: {
      library: {},
    },
  },
};

const CreateIndexName = (indexName) => {
  const addLeadingZero = (number) => (number < 10 ? `0${number}` : number);

  const date = new Date();
  const month = addLeadingZero(date.getMonth() + 1);
  const day = addLeadingZero(date.getDate());
  const hours = addLeadingZero(date.getHours());
  const minutes = addLeadingZero(date.getMinutes());
  return `${indexName}-${date.getFullYear()}-${month}-${day}_${hours}-${minutes}`;
};

const SwitchAlias = async (newIndexName, aliasName) => {
  let actions = [
    {
      add: {
        index: newIndexName,
        alias: indexName,
      },
    },
  ];

  // TODO can check to remove old alias only if exists, meanwhile simply remove all that match
  actions.unshift({
    remove: {
      index: `library-*`,
      alias: indexName,
    },
  });

  console.log("[LOG] Alias actions: ", actions);

  try {
    await client.indices.updateAliases({
      body: {
        actions: actions,
      },
    });
    return true;
  } catch (error) {
    console.error(JSON.stringify(error));
    return false;
  }
};

export default async function createIndexWithDocuments(documentArray) {
  const indexNameWithTimestamp = CreateIndexName(indexName);

  const indexTemplateExists = await client.indices.existsIndexTemplate({
    name: indexTemplateName,
  });

  console.log(
    `[LOG] Index template: ${indexTemplateName} exists: ${indexTemplateExists}`
  );

  if (!indexTemplateExists) {
    console.log(
      `[LOG] Index template: ${indexTemplateName} does not exist, create`
    );
    const resultCreateIndexTemplate = await client.indices.putIndexTemplate(
      template
    );

    console.log(
      `[LOG] Result of create index template: ${JSON.stringify(
        resultCreateIndexTemplate
      )}`
    );
  }

  const resultCreateIndex = await client.bulk({
    index: indexNameWithTimestamp,
    body: documentArray,
  });

  console.log(
    `[LOG] Result of create index: ${JSON.stringify(resultCreateIndex)}`
  );

  const resultSwitchAlias = await SwitchAlias(
    indexNameWithTimestamp,
    indexName
  );

  console.log(
    `[LOG] Result of switch alias: ${JSON.stringify(resultSwitchAlias)}`
  );

  // TODO remove old indices
}
