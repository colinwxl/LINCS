import _debug from 'debug';
const debug = _debug('app:server:data:elastic');

import { esClient } from '../serverConf';
import { Dataset } from '../models/Dataset';

function indexDatasets() {
  debug('Indexing datasets');
  return new Promise((resolve, reject) => {
    Dataset
      .forge()
      .fetchAll()
      .then(dsModels => dsModels.toJSON())
      .then(datasets => {
        Promise.all(datasets.map(ds =>
          new Promise((res, rej) => {
            esClient.index({
              index: 'datasets',
              type: 'dataset',
              id: ds.id,
              body: {
                full_assay_name: ds.fullAssayName,
                description: ds.description,
                center_name: ds.centerName,
                assay: ds.assay,
                method: ds.method,
                classification: ds.classification,
                physical_detection: ds.physicalDetection,
                lincs_id: ds.lincsId,
              },
            }, (err, resp) => {
              if (err) {
                rej(err);
              } else {
                res(resp);
              }
            });
          })
        ))
        .then(() => resolve())
        .catch(e => reject(e));
      });
  });
}

const datasetSettings = {
  index: 'datasets',
  analysis: {
    filter: {
      autocomplete_filter: {
        type: 'edge_ngram',
        min_gram: 2,
        max_gram: 15,
      },
    },
    analyzer: {
      autocomplete: {
        type: 'custom',
        tokenizer: 'standard',
        filter: [
          'lowercase',
          'autocomplete_filter',
        ],
      },
    },
  },
};

const datasetMapping = {
  index: 'datasets',
  type: 'dataset',
  body: {
    dataset: {
      properties: {
        full_assay_name: {
          type: 'string',
          // index_analyzer: 'autocomplete',
          // search_analyzer: 'standard',
        },
        description: {
          type: 'string',
          // index_analyzer: 'autocomplete',
          // search_analyzer: 'standard',
        },
        center_name: {
          type: 'string',
          // index_analyzer: 'autocomplete',
          // search_analyzer: 'standard',
        },
        assay: {
          type: 'string',
          // index_analyzer: 'autocomplete',
          // search_analyzer: 'standard',
        },
        method: {
          type: 'string',
          // index_analyzer: 'autocomplete',
          // search_analyzer: 'standard',
        },
        classification: {
          type: 'string',
          // index_analyzer: 'autocomplete',
          // search_analyzer: 'standard',
        },
        physical_detection: {
          type: 'string',
          // index_analyzer: 'autocomplete',
          // search_analyzer: 'standard',
        },
        lincs_id: {
          type: 'string',
          // index_analyzer: 'autocomplete',
          // search_analyzer: 'standard',
        },
      },
    },
  },
};

esClient.indices.delete({ index: 'datasets' }, () => {
  esClient.indices.create({ index: 'datasets' }, () => {
    esClient.indices.close({ index: 'datasets' }, () => {
      esClient.indices.putSettings(datasetSettings, () => {
        esClient.indices.open({ index: 'datasets' }, () => {
          esClient.indices.putMapping(datasetMapping, () => {
            indexDatasets()
              .then(() => {
                debug('Datasets indexed.');
                process.exit(0);
              })
              .catch(() => process.exit(1));
          });
        });
      });
    });
  });
});