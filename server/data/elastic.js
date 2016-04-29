import _debug from 'debug';
const debug = _debug('app:server:data:elastic');

import { esClient } from '../serverConf';
import { Dataset } from '../models/Dataset';
import { Cell } from '../models/Cell';
import { SmallMolecule } from '../models/SmallMolecule';

function indexDatasets() {
  debug('Indexing datasets');
  return Dataset
    .forge()
    .fetchAll({ withRelated: ['center'] })
    .then(dsModels => dsModels.toJSON())
    .then(datasets => {
      const body = [];
      datasets.forEach(ds => {
        body.push({
          index: {
            _index: 'lincs',
            _type: 'dataset',
            _id: ds.id,
          },
        }, {
          full_assay_name: ds.fullAssayName,
          description: ds.description,
          center_name: ds.center.name,
          assay: ds.assay,
          method: ds.method,
          classification: ds.classification,
          physical_detection: ds.physicalDetection,
          lincs_id: ds.lincsId,
        });
      });
      return esClient.bulk({ body });
    });
}

function indexCells() {
  debug('Indexing cells');
  return Cell
    .forge()
    .fetchAll()
    .then(cellModels => cellModels.toJSON())
    .then(cells => {
      const body = [];
      cells.forEach(cell => {
        body.push({
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
      return esClient.bulk({ body });
    });
}

function indexSms() {
  debug('Indexing small molecules.');
  return SmallMolecule
    .forge()
    .fetchAll()
    .then(smModels => smModels.toJSON())
    .then(sms => {
      let body = [];
      sms.forEach(sm => {
        body.push({
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
        if (body.length === 5000) {
          esClient.bulk({ body });
          body = [];
        }
      });
      return esClient.bulk({ body });
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

const { indices } = esClient;

indices
  .delete({ index: 'lincs' })
  .then(() => indices.create({ index: 'lincs' }))
  .then(() => indices.close({ index: 'lincs' }))
  .then(() => indices.putSettings(lincsSettings))
  .then(() => indices.open({ index: 'lincs' }))
  .then(() => indices.putMapping(datasetMapping))
  .then(() => indexDatasets())
  .then(() => indices.putMapping(cellMapping))
  .then(() => indexCells())
  .then(() => indices.putMapping(smMapping))
  .then(() => indexSms())
  .then(() => process.exit(0))
  .catch((e) => {
    debug(e);
    process.exit(1);
  });
