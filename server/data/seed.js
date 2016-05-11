// This file populates the database. Taking the JSON files from the `../../seed` folder (note that
// some of these are very large) and the bookshelfjs models, the data is inserted.
// This file is run with `npm run seed`. It usually follows `npm run migrate`.
//
// To understand how this file works, you will need to understand promises:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

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
import { Tool } from '../models/Tool';
import centers from '../../seed/centers';
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

const inDevelopment = process.env.NODE_ENV !== 'production';

/**
 * Saves a dataset using the `Dataset` bookshelfjs model.
 *
 * @param  {Object} dsObj The dataset object. To get an idea of what this looks like,
 * view the schema of the database.
 * @param  {String} centerId The id of the center that the dataset is associated with. This is
 * added to the dsObj.
 * @param  {Array} smIds The small molecule ids associated with the dataset. These will
 * be `attached` using bookshelfjs. In other words, this dataset's id and the ids of the
 * small molecules will be inserted into small_molecules_datasets.
 * @param  {Array} cellIds  Similar to smIds. These are the cellIds associated with the dataset.
 * They will be inserted alongside the dataset's id into cells_datasets
 * @return {Promise} A promise that resolves when the dataset has been inserted.
 */
function saveDataset(dsObj, centerId, smIds, cellIds) {
  const ds = { center_id: centerId, ...dsObj };
  return Dataset
    .forge(ds)
    .save()
    .then(dsModel =>
      knex.transaction((transacting) => {
        const promises = [];
        if (smIds.length) {
          promises.push(dsModel.smallMolecules().attach(smIds, { transacting }));
        }
        if (cellIds.length) {
          promises.push(dsModel.cells().attach(cellIds, { transacting }));
        }
        return Promise.all(promises);
      })
    );
}


/**
 * Inserts the small molecules from the JSON in the seed folder
 * using knex. {@link http://knexjs.org/#Utility-BatchInsert knex.batchInsert} is used
 * instead of the `Small Molecule` bookshelf model for performance.
 *
 * @return {Promise} A promise from knex, resolving when the small molecules are inserted.
 */
function insertSmallMolecules() {
  debug(`Inserting ${Object.keys(smallMolecules).length} small molecules.`);
  const sms = [];
  _.each(smallMolecules, (obj) => {
    if (obj.lincs_id && obj.lincs_id.length) {
      sms.push({ ...obj, created_at: moment().toDate() });
    }
  });
  if (inDevelopment) {
    const promises = [];
    while (sms.length) {
      promises.push(knex.batchInsert('small_molecules', sms.splice(0, 50)));
    }
    return Promise.all(promises);
  }
  return knex.batchInsert('small_molecules', sms);
}


/**
 * Find a list of small molecules in the database given their lincs ids.
 *
 * @param  {Array} lincsIds The LINCS ids (LSM's) of the small molecules to be found.
 * @return {Promise} A promise resolving when all the small molecules are found.
 */
function findSmallMolecules(lincsIds) {
  if (!lincsIds.length) {
    return Promise.resolve([]);
  }
  // sqlite can only take 999 variables at a time.
  // Split up lincsIds into multiple queries, each with arrays of 999 lincs ids.
  if (inDevelopment) {
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


/**
 * A utility function to find a list of ids using the tableName and the
 * list of entity names.
 *
 * @param  {String} tableName  The tableName of the MySQL database where the entityNames can
 * be found. This is one of the tables in the database schema.
 * @param  {Array} entityNames The entityNames whose ids will be found.
 * @return {Promise} A promise from knex that resolves to an array of ids
 * when all of them have been found.
 */
function findEntities(tableName, entityNames) {
  if (!entityNames.length) {
    return Promise.resolve([]);
  }
  return knex
    .select('id')
    .from(tableName)
    .whereIn('name', entityNames)
    .then(results => results.map(result => result.id));
}


/**
 * Find a list of cell ids in the database from their names.
 *
 * @param  {Array} cellNames The names or synonyms of cells in the MySQL database.
 * @return {Promise} A promise that resolves to an array if no cell names are
 * given or when all of the ids have been found.
 */
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

/**
 * Insert the tissues and diseases from JSON files in the '../../seed' folder.
 * @return {Promise} A promise that resolves when all tissues and diseases have
 * been inserted.
 */
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
  return Promise.all([
    knex.insert(tissues).into('tissues'),
    knex.insert(diseases).into('diseases'),
  ]);
}

/**
 * Inserts cells into the database. First the disease and tissue ids associated with
 * the cell need to be found and later attached (associated).
 * @return {Promise} A promise that resolves when all of the cells have been inserted.
 */
function insertCellLines() {
  debug(`Inserting ${cellLines.length} cells.`);
  return Promise.all(cellLines.map(cl =>
    new Promise((resolve, reject) => {
      const tissue = cl.tissue || '';
      const disease = cl.disease || '';
      const synonyms = cl.synonyms || [];
      findEntities(Tissue.prototype.tableName, [tissue])
        .then(tissueIds => {
          findEntities(Disease.prototype.tableName, [disease])
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
                  .catch(e => reject(e));
              });
            })
            .catch(e => reject(e));
        })
        .catch(e => reject(e));
    })
  ));
}

/**
 * Find all of the center names from the datasets (make sure to add the DCIC).
 * @return {Promise} A promise from knex that resolves when all of the centers have been
 * inserted.
 */
function insertCenters() {
  const created = moment().toDate();
  const centersArr = centers.map(obj => ({ ...obj, created_at: created }));
  debug(`Inserting ${centersArr.length} centers.`);
  return knex.insert(centersArr).into('centers');
}

/**
 * Given the centerName, find its id in the database.
 * @param  {String} centerName The name of the center to find.
 * @return {Promise} A promise that resolves to the center's id when it is found.
 */
function findCenterId(centerName) {
  return knex
    .select('id')
    .from('centers')
    .where('name', centerName)
    .then(resultsArr => {
      if (resultsArr.length) {
        return resultsArr[0].id;
      }
      return null;
    });
}

/**
 * Find all of the necessary ids and build the dataset object to be passed to saveDataset().
 * @return {Promise} A promise that resolves when all of the datasets have been built and saved.
 */
function buildDatasets() {
  debug(`Inserting ${datasets.length} datasets.`);
  const attrs = Dataset.prototype.permittedAttributes();
  return Promise.all(datasets.map(ds =>
    new Promise((resolve, reject) => {
      findCenterId(ds.center_name)
        .then(centerId => {
          findSmallMolecules(ds.sm_ids)
            .then(smIds => {
              findCells(ds.cells)
                .then(cellIds => {
                  saveDataset(_.pick(ds, attrs), centerId, smIds, cellIds)
                    .then(resolve);
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
        .catch(e => {
          debug(e);
          reject(e);
        });
    })
  ));
}

/**
 * Insert publications into the database from the JSON in the '../../seed' folder.
 * @return {Promise} A promise that resolves when all of the publications and their
 * authors have been inserted and associated with each other.
 */
function insertPublications() {
  const created = moment().toDate();
  const pubs = publications.map(obj => ({ ...obj, created_at: created }));
  let authors = [];
  pubs.forEach(obj => {
    authors = _.union(authors, obj.authors);
  });
  // Insert all of the authors and make an object where the author name is the key and
  // his/her id is the value so that we can attach it to publications.
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

/**
 * Insert tools into the database. Tool object is built by finding the tool's center's id
 * and from the JSON in the '../../seed' folder.
 * @return {Promise} A promise that resolves when the tools have been inserted.
 */
function insertTools() {
  debug(`Inserting ${tools.length} tools.`);
  return Promise.all(tools.map(toolObj => {
    const tool = _.pick(toolObj, Tool.prototype.permittedAttributes());
    return findCenterId(toolObj.center)
      .then(centerId => {
        tool.center_id = centerId;
        return knex.insert(tool).into('tools');
      });
  }));
}

// This is where the file is run. It checks if there is a connection to the
// database by running a simple query, and if it is, then the data is inserted.
knex.raw('select 1+1 as result').then(() => {
  debug('Connection successful.');

  // This is an array of promises that will contain all of the promises that will
  // resolve when the data has be inserted into the database.
  const promises = [];
  const created = moment().toDate();

  // Build and insert symposia, workshops, webinars, and funding opportunities into the db.
  const syms = symposia.map(obj => ({ ...obj, created_at: created }));
  promises.push(knex.insert(syms).into('symposia'));

  const shops = workshops.map(obj => ({ ...obj, created_at: created }));
  promises.push(knex.insert(shops).into('workshops'));

  const webs = webinars.map(obj => ({ ...obj, created_at: created }));
  promises.push(knex.insert(webs).into('webinars'));

  const opps = fundingOpportunities.map(obj => ({ ...obj, created_at: created }));
  promises.push(knex.insert(opps).into('funding_opportunities'));

  promises.push(insertPublications());

  // If the --omit-data argument is passed, don't insert datasets and metadata.
  // Otherwise, insert entities and datasets in the proper order so that they are available.
  if (argv['omit-data']) {
    debug('Omitting centers, tools, and dataset tables.');
  } else {
    promises.push(
      new Promise((resolve, reject) => {
        insertCenters()
          // Tissues and diseases must be inserted before cell lines
          .then(() => insertTissuesAndDiseases())
          .then(() => insertCellLines())
          .then(() => insertSmallMolecules())
          // Need to insert tools and datasets after centers
          .then(() => insertTools())
          .then(() => buildDatasets())
          .then(resolve)
          .catch(e => {
            reject(e);
            debug(e);
          });
      })
    );
  }

  // Promise.all will check that all of the promises in the promises array defined
  // above have resolved. If they have without errors, then the database has
  // been seeded.
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
