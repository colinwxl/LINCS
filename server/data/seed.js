import _debug from 'debug';
import _ from 'lodash';
import moment from 'moment';

import { Dataset } from '../models/Dataset';
import { Disease } from '../models/Disease';
import { Tissue } from '../models/Tissue';
import { Cell } from '../models/Cell';
import { SmallMolecule } from '../models/SmallMolecule';
import { Publication } from '../models/Publication';
import { CompTool } from '../models/CompTool';
import smallMolecules from '../../seed/smallMolecules';
import symposia from '../../seed/symposia';
import workshops from '../../seed/workshops';
import webinars from '../../seed/webinars';
import fundingOpportunities from '../../seed/fundingOpportunities';
import datasets from '../../seed/datasets';
import publications from '../../seed/publications';
import { knex } from '../serverConf';

const debug = _debug('app:server:data:seed');

function saveDataset(dsObj, smIds, tissueIds, diseaseIds, cellIds) {
  return Dataset
    .forge(dsObj)
    .save()
    .then(dsModel => {
      if (smIds.length) {
        dsModel.smallMolecules().attach(smIds);
      }
      if (tissueIds.length) {
        dsModel.tissues().attach(tissueIds);
      }
      if (diseaseIds.length) {
        dsModel.diseases().attach(diseaseIds);
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
      sms.push({
        ...obj,
        created_at: moment().toDate(),
      });
    }
  });
  return knex.batchInsert('small_molecules', sms);
}

function findSmallMolecules(lincsIds) {
  if (!lincsIds.length) {
    return Promise.resolve([]);
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

function insertEntities() {
  let tissues = [];
  let diseases = [];
  let cells = [];
  datasets.forEach(ds => {
    ds.tissues.forEach(name => {
      if (tissues.indexOf(name) === -1) {
        tissues.push(name);
      }
    });
    ds.diseases.forEach(name => {
      if (diseases.indexOf(name) === -1) {
        diseases.push(name);
      }
    });
    ds.cells.forEach(name => {
      if (cells.indexOf(name) === -1) {
        cells.push(name);
      }
    });
  });
  const created = moment().toDate();
  tissues = tissues.map(name => ({ name, created_at: created }));
  diseases = diseases.map(name => ({ name, created_at: created }));
  cells = cells.map(name => ({ name, created_at: created }));
  return Promise.all([
    knex.insert(tissues).into('tissues'),
    knex.insert(diseases).into('diseases'),
    knex.insert(cells).into('cells'),
  ]);
}

function buildDatasets() {
  debug(`There are ${datasets.length} datasets to insert.`);
  let dsSaved = 0;
  return Promise.all(datasets.map(ds =>
    new Promise((resolve) => {
      findSmallMolecules(ds.smIds)
        .then(smIds =>
          findEntities(Tissue, ds.tissues)
            .then(tissueIds =>
              findEntities(Disease, ds.diseases)
                .then(diseaseIds =>
                  findEntities(Cell, ds.cells)
                    .then(cellIds => {
                      saveDataset(
                        _.pick(ds, Dataset.prototype.permittedAttributes()),
                        smIds,
                        tissueIds,
                        diseaseIds,
                        cellIds
                      ).then(() => {
                        dsSaved++;
                        debug(`${dsSaved} datasets saved.`);
                        resolve();
                      });
                    })
                    .catch(e => debug(e))
                )
                .catch(e => debug(e))
            )
            .catch(e => debug(e))
        )
        .catch(e => debug(e));
    })
  ));
}

knex.raw('select 1+1 as result').then(() => {
  debug('Connection successful.');
  const promises = [];
  const created = moment().toDate();
  const syms = symposia.map(obj => ({ ...obj, created_at: created }));
  const shops = workshops.map(obj => ({ ...obj, created_at: created }));
  const webs = webinars.map(obj => ({ ...obj, created_at: created }));
  const opps = fundingOpportunities.map(obj => ({ ...obj, created_at: created }));
  const pubs = publications.map(obj => ({ ...obj, created_at: created }));

  promises.push(knex.insert(syms).into('symposia'));
  promises.push(knex.insert(shops).into('workshops'));
  promises.push(knex.insert(webs).into('webinars'));
  promises.push(knex.insert(opps).into('funding_opportunities'));
  promises.push(
    Promise.all(pubs.map(obj => {
      if (obj.comp_tools) {
        return Promise
          .all(obj.comp_tools.map(tool => CompTool.forge(tool).save().then(model => model.id)))
          .then(toolIds => {
            const pub = _.pick(obj, Publication.prototype.permittedAttributes());
            Publication.forge(pub).save().then(pubModel => {
              if (toolIds.length) {
                pubModel.compTools().attach(toolIds);
              }
            });
          });
      }
      debug(obj);
      return Promise.resolve(obj);
    }))
  );

  promises.push(
    new Promise((resolve) => {
      insertSmallMolecules()
        .then(() => {
          insertEntities()
            .then(() => {
              buildDatasets()
                .then(() => {
                  debug('Datasets inserted');
                  resolve();
                });
            });
        });
    })
  );

  Promise
    .all(promises)
    .then(() => {
      debug('Database seeded.');
      process.exit(0);
    })
    .catch(e => {
      debug(e);
      process.exit(1);
    });
});
