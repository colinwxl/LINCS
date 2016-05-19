// This file is run using `npm run elastic`. It imports the elasticsearch client
// generated from ../serverConf (https://github.com/elastic/elasticsearch-js) and the
// bookshelf js models.
//
// To understand how esClient.bulk works, view these docs:
// https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference-2-2.html#api-bulk-2-2

import _debug from 'debug';
const debug = _debug('app:server:data:elastic');

import { esClient } from '../serverConf';
import { Dataset } from '../models/Dataset';
import { Cell } from '../models/Cell';
import { SmallMolecule } from '../models/SmallMolecule';


/**
 * indexDatasets - Indexes the datasets in the database in elasticsearch. Fetches all the
 * datasets (with their center) using the bookshelf `Dataset` model and then uses the
 * {@link https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference-2-2.html#api-bulk-2-2 elasticsearch bulk API}
 * to index them all at once.
 *
 * @return {Promise} A promise that resolves when the datasets are indexed.
 */
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

/**
 * indexCells - Indexes the cells in the database in elasticsearch. Fetches all the
 * cells using the bookshelf `Cell` model and then uses the
 * {@link https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference-2-2.html#api-bulk-2-2 elasticsearch bulk API}
 * to index them all at once.
 *
 * @return {Promise} A promise that resolves when the cells are indexed
 */
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

/**
 * indexSms - Indexes the small molecules in the database in elasticsearch. Fetches all the
 * small molecules (with their center) using the bookshelf `Small Molecule` model and then uses the
 * {@link https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference-2-2.html#api-bulk-2-2 elasticsearch bulk API}
 * to index them all at once.
 *
 * @return {Promise} A promise that resolves when the small molecules are indexed
 */
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
        full_assay_name: { type: 'string' },
        description: { type: 'string' },
        center_name: { type: 'string' },
        assay: { type: 'string' },
        method: { type: 'string' },
        classification: { type: 'string' },
        physical_detection: { type: 'string' },
        lincs_id: { type: 'string' },
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
        name: { type: 'string' },
        lincs_id: { type: 'string' },
        source: { type: 'string' },
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
        name: { type: 'string' },
        source: { type: 'string' },
        lincs_id: { type: 'string' },
        pubchem_cid: { type: 'string' },
      },
    },
  },
};

const { indices } = esClient;

let promise;

// Deleting the index will fail if it doesn't exist
try {
  promise = indices
    .delete({ index: 'lincs' })
    .then(() => indices.create({ index: 'lincs' }));
} catch (e) {
  // Index does not exist so create it
  promise = indices.create({ index: 'lincs' });
}

// Index has been deleted if it exists and created already.
promise
  // In order to update the settings of the index, it must be closed.
  // These next three lines close the index, update the settings, and then reopen the index.
  .then(() => indices.close({ index: 'lincs' }))
  .then(() => indices.putSettings(lincsSettings))
  .then(() => indices.open({ index: 'lincs' }))
  // Update the dataset mapping and index the datasets
  .then(() => indices.putMapping(datasetMapping))
  .then(() => indexDatasets())
  // Update the cell mapping and index the datasets
  .then(() => indices.putMapping(cellMapping))
  .then(() => indexCells())
  // Update the small molecule mapping and index the datasets
  .then(() => indices.putMapping(smMapping))
  .then(() => indexSms())
  .then(() => process.exit(0))
  .catch((e) => {
    debug(e);
    process.exit(1);
  });
