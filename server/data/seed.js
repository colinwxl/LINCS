import _debug from 'debug';
import _ from 'lodash';
import moment from 'moment';
import { argv } from 'yargs';

import { Dataset } from '../models/Dataset';
import { Disease } from '../models/Disease';
import { Tissue } from '../models/Tissue';
import { Cell } from '../models/Cell';
import { SmallMolecule } from '../models/SmallMolecule';
import { Author } from '../models/Author';
import { Publication } from '../models/Publication';
import tools from '../../seed/tools';
import smallMolecules from '../../seed/smallMolecules';
import cellLines from '../../seed/cellLines';
import symposia from '../../seed/symposia';
import workshops from '../../seed/workshops';
import webinars from '../../seed/webinars';
import fundingOpportunities from '../../seed/fundingOpportunities';
import datasets from '../../seed/datasets';
import publications from '../../seed/publications';
import { knex } from '../serverConf';

const debug = _debug('app:server:data:seed');

function saveDataset(dsObj, smIds, cellIds) {
  return Dataset
    .forge(dsObj)
    .save()
    .then(dsModel => {
      if (smIds.length) {
        dsModel.smallMolecules().attach(smIds);
      }
      if (cellIds.length) {
        dsModel.cells().attach(cellIds);
      }
    });
}

function insertSmallMolecules() {
  debug(`Inserting ${Object.keys(smallMolecules).length} small molecules.`);
  const sms = [];
  _.each(smallMolecules, (obj) => {
    if (obj.lincs_id && obj.lincs_id.length) {
      sms.push({ ...obj, created_at: moment().toDate() });
    }
  });
  if (process.env.NODE_ENV !== 'production') {
    return Promise.all(sms.map(sm => knex.insert(sm).into('small_molecules')));
  }
  return knex.batchInsert('small_molecules', sms);
}

function findSmallMolecules(lincsIds) {
  if (!lincsIds.length) {
    return Promise.resolve([]);
  }
  // sqlite can only take 999 variables at a time.
  // Split up lincsIds into multiple queries, each with arrays of 999 lincs ids.
  if (process.env.NODE_ENV !== 'production') {
    const promises = [];
    const ids = [];
    while (lincsIds.length) {
      promises.push(
        knex
          .select('id')
          .from(SmallMolecule.prototype.tableName)
          .whereIn('lincs_id', lincsIds.splice(0, 999))
          .then(results => {
            results.forEach(result => ids.push(result.id));
          })
      );
    }
    return Promise.all(promises).then(() => ids);
  }
  return knex
    .select('id')
    .from(SmallMolecule.prototype.tableName)
    .whereIn('lincs_id', lincsIds)
    .then(results => results.map(result => result.id));
}

function findEntities(Model, entityNames) {
  if (!entityNames.length) {
    return Promise.resolve([]);
  }
  return knex
    .select('id')
    .from(Model.prototype.tableName)
    .whereIn('name', entityNames)
    .then(results => results.map(result => result.id));
}

function findCells(cellNames) {
  if (!cellNames.length) {
    return Promise.resolve([]);
  }
  return new Promise((resolve, reject) => {
    knex
      .select('id')
      .from('cells')
      .whereIn('name', cellNames)
      .then(results => {
        knex
          .select('cell_id')
          .from('synonyms')
          .whereIn('name', cellNames)
          .then(moreResults => {
            const allIds = _.union(
              results.map(res => res.id),
              moreResults.map(res => res.cell_id)
            );
            resolve(allIds);
          })
          .catch(e => reject(e));
      })
      .catch(e => reject(e));
  });
}

function insertTissuesAndDiseases() {
  let tissues = [];
  let diseases = [];
  cellLines.forEach(cl => {
    const tissue = cl.tissue;
    const disease = cl.disease;
    if (!!tissue && tissues.indexOf(tissue) === -1) {
      tissues.push(tissue);
    }
    if (!!disease && diseases.indexOf(disease) === -1) {
      diseases.push(disease);
    }
  });
  const created = moment().toDate();
  tissues = tissues.map(name => ({ name, created_at: created }));
  diseases = diseases.map(name => ({ name, created_at: created }));
  debug(`Inserting ${tissues.length} tissues and ${diseases.length} diseases.`);
  if (process.env.NODE_ENV !== 'production') {
    const promises = [];
    tissues.forEach(tissue => {
      promises.push(knex.insert(tissue).into('tissues'));
    });
    diseases.forEach(disease => {
      promises.push(knex.insert(disease).into('diseases'));
    });
    return Promise.all(promises);
  }
  return Promise.all([
    knex.insert(tissues).into('tissues'),
    knex.insert(diseases).into('diseases'),
  ]);
}

function insertCellLines() {
  debug(`Inserting ${cellLines.length} cells.`);
  return Promise.all(cellLines.map(cl =>
    new Promise((resolve, reject) => {
      const tissue = cl.tissue || '';
      const disease = cl.disease || '';
      const synonyms = cl.synonyms || [];
      findEntities(Tissue, [tissue])
        .then(tissueIds => {
          findEntities(Disease, [disease])
            .then(diseaseIds => {
              const cell = _.pick(cl, Cell.prototype.permittedAttributes());
              Cell.forge(cell).save().then((clModel) => {
                if (tissueIds.length) {
                  clModel.tissues().attach(tissueIds);
                }
                if (diseaseIds.length) {
                  clModel.diseases().attach(diseaseIds);
                }
                if (!synonyms.length) {
                  resolve();
                  return;
                }
                const syns = synonyms.map(name => ({
                  name,
                  cell_id: clModel.id,
                  created_at: moment().toDate(),
                }));
                knex.insert(syns).into('synonyms')
                .then(() => resolve())
                .catch(e => {
                  debug(e);
                  reject(e);
                });
              });
            })
            .catch(e => {
              debug(e);
              reject(e);
            });
        })
        .catch(e => {
          debug(e);
          reject(e);
        });
    })
  ));
}

function buildDatasets() {
  debug(`Inserting ${datasets.length} datasets.`);
  return Promise.all(datasets.map(ds =>
    new Promise((resolve, reject) => {
      findSmallMolecules(ds.smIds)
        .then(smIds =>
          findCells(ds.cells)
            .then(cellIds => {
              debug(cellIds);
              saveDataset(
                _.pick(ds, Dataset.prototype.permittedAttributes()),
                smIds,
                cellIds
              ).then(() => {
                resolve();
              });
            })
            .catch(e => {
              debug(e);
              reject(e);
            })
        )
        .catch(e => {
          debug(e);
          reject(e);
        });
    })
  ));
}

function insertPublications() {
  const created = moment().toDate();
  const pubs = publications.map(obj => ({ ...obj, created_at: created }));
  let authors = [];
  pubs.forEach(obj => {
    authors = _.union(authors, obj.authors);
  });
  const authorIdMap = {};
  return Promise.all(authors.map(name => {
    const author = { name, created_at: created };
    return Author.forge(author).save().then(model => (authorIdMap[name] = model.id));
  }))
  .then(() =>
    Promise.all(pubs.map(obj => {
      const pub = _.pick(obj, Publication.prototype.permittedAttributes());
      return Publication.forge(pub).save().then(pubModel => {
        const authorIds = obj.authors.map(name => authorIdMap[name]);
        if (authorIds.length) {
          pubModel.authors().attach(authorIds);
        }
      });
    }))
  );
}

knex.raw('select 1+1 as result').then(() => {
  debug('Connection successful.');
  const promises = [];
  const created = moment().toDate();
  const syms = symposia.map(obj => ({ ...obj, created_at: created }));
  const shops = workshops.map(obj => ({ ...obj, created_at: created }));
  const webs = webinars.map(obj => ({ ...obj, created_at: created }));
  const opps = fundingOpportunities.map(obj => ({ ...obj, created_at: created }));

  promises.push(knex.insert(syms).into('symposia'));
  promises.push(knex.insert(shops).into('workshops'));
  promises.push(knex.insert(webs).into('webinars'));
  promises.push(knex.insert(opps).into('funding_opportunities'));
  promises.push(knex.insert(tools).into('tools'));
  promises.push(insertPublications());

  if (argv['omit-data']) {
    debug('Omitting dataset tables.');
  } else {
    promises.push(
      new Promise((resolve, reject) => {
        insertSmallMolecules()
          .then(() => {
            debug('Small molecules inserted.');
            return insertTissuesAndDiseases();
          })
          .then(() => {
            debug('Tissues and diseases inserted.');
            return insertCellLines();
          })
          .then(() => {
            debug('Cells inserted.');
            return buildDatasets();
          })
          .then(() => {
            debug('Datasets inserted.');
            resolve();
          })
          .catch(e => {
            reject(e);
            debug(e);
          });
      })
    );
  }

  Promise
    .all(promises)
    .then(() => {
      debug('Database seeded successfully.');
      process.exit(0);
    })
    .catch(e => {
      debug(e);
      process.exit(1);
    });
});
