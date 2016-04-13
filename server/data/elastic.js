import _debug from 'debug';
const debug = _debug('app:server:data:elastic');

import { esClient } from '../serverConf';
import { Dataset } from '../models/Dataset';
import { Cell } from '../models/Cell';
import { SmallMolecule } from '../models/SmallMolecule';

const bulkBuffer = [];

function indexDatasets() {
  debug('Indexing datasets');
  return Dataset
    .forge()
    .fetchAll()
    .then(dsModels => dsModels.toJSON())
    .then(datasets => {
      datasets.forEach(ds => {
        bulkBuffer.push({
          index: {
            _index: 'lincs',
            _type: 'dataset',
            _id: ds.id,
          },
        }, {
          full_assay_name: ds.fullAssayName,
          description: ds.description,
          center_name: ds.centerName,
          assay: ds.assay,
          method: ds.method,
          classification: ds.classification,
          physical_detection: ds.physicalDetection,
          lincs_id: ds.lincsId,
        });
      });
    });
}

function indexCells() {
  debug('Indexing cells');
  return Cell
    .forge()
    .fetchAll()
    .then(cellModels => cellModels.toJSON())
    .then(cells => {
      cells.forEach(cell => {
        bulkBuffer.push({
          index: {
            _index: 'lincs',
            _type: 'cell',
            _id: cell.id,
          },
        }, {
          name: cell.name,
          lincs_id: cell.lincsId,
          source: cell.source,
        });
      });
    });
}

function indexSms() {
  debug('Indexing small molecules.');
  return SmallMolecule
    .forge()
    .fetchAll()
    .then(smModels => smModels.toJSON())
    .then(sms => {
      sms.forEach(sm => {
        bulkBuffer.push({
          index: {
            _index: 'lincs',
            _type: 'smallmolecule',
            _id: sm.id,
          },
        }, {
          name: sm.name,
          lincs_id: sm.lincsId,
          source: sm.source,
          pubchem_cid: sm.pubchemCid,
        });
      });
    });
}

const lincsSettings = {
  index: 'lincs',
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
  index: 'lincs',
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

const cellMapping = {
  index: 'lincs',
  type: 'cell',
  body: {
    cell: {
      properties: {
        name: {
          type: 'string',
          // index_analyzer: 'autocomplete',
          // search_analyzer: 'standard',
        },
        lincs_id: {
          type: 'string',
          // index_analyzer: 'autocomplete',
          // search_analyzer: 'standard',
        },
        source: {
          type: 'string',
          // index_analyzer: 'autocomplete',
          // search_analyzer: 'standard',
        },
      },
    },
  },
};

const smMapping = {
  index: 'lincs',
  type: 'smallmolecule',
  body: {
    smallmolecule: {
      properties: {
        name: {
          type: 'string',
          // index_analyzer: 'autocomplete',
          // search_analyzer: 'standard',
        },
        source: {
          type: 'string',
          // index_analyzer: 'autocomplete',
          // search_analyzer: 'standard',
        },
        lincs_id: {
          type: 'string',
          // index_analyzer: 'autocomplete',
          // search_analyzer: 'standard',
        },
        pubchem_cid: {
          type: 'string',
          // index_analyzer: 'autocomplete',
          // search_analyzer: 'standard',
        },
      },
    },
  },
};


esClient.indices.delete({ index: '_all' }, () => {
  esClient.indices.create({ index: 'lincs' }, () => {
    esClient.indices.close({ index: 'lincs' }, () => {
      esClient.indices.putSettings(lincsSettings, () => {
        esClient.indices.open({ index: 'lincs' }, () => {
          esClient.indices.putMapping(datasetMapping, () => {
            indexDatasets()
              .then(() => {
                esClient.indices.putMapping(cellMapping, () => {
                  indexCells()
                    .then(() => {
                      esClient.indices.putMapping(smMapping, () => {
                        indexSms()
                          .then(() => {
                            esClient.bulk({ body: bulkBuffer }, () => process.exit(0));
                          })
                          .catch(() => process.exit(1));
                      });
                    })
                    .catch(() => process.exit(1));
                });
              })
              .catch(() => process.exit(1));
          });
        });
      });
    });
  });
});
