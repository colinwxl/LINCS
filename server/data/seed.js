import _debug from 'debug';
import _ from 'lodash';
import moment from 'moment';

import { Dataset } from '../models/Dataset';
import { Workshop } from '../models/Workshop';
import { Symposium } from '../models/Symposium';
import { Webinar } from '../models/Webinar';
import { FundingOpportunity } from '../models/FundingOpportunity';
import { Disease } from '../models/Disease';
import { Tissue } from '../models/Tissue';
import { Cell } from '../models/Cell';
import { SmallMolecule } from '../models/SmallMolecule';
import smallMolecules from '../../seed/smallMolecules';
import symposia from '../../seed/symposia';
import workshops from '../../seed/workshops';
import webinars from '../../seed/webinars';
import fundingOpportunities from '../../seed/fundingOpportunities';
import datasets from '../../seed/datasets';
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

function save(Model, obj, returnId) {
  return Model.forge(obj).save().then(model => {
    if (returnId) {
      return model.id;
    }
    return model;
  })
  .catch(e => debug(e));
}

function saveMultiple(Model, objArr, returnIds) {
  return objArr.length
    ? Promise.all(objArr.map((obj) => save(Model, obj, returnIds)))
    : Promise.resolve([]);
}

function saveAllSmallMolecules() {
  debug(`Inserting ${Object.keys(smallMolecules).length} small molecules.`);
  const sms = [];
  _.each(smallMolecules, (obj) => {
    sms.push({
      ...obj,
      created_at: moment().toDate(),
    });
  });
  return knex.insert(sms).into('small_molecules');
}

function findSmallMolecules(lincsIds) {
  if (!lincsIds.length) {
    return Promise.resolve([]);
  }
  return Promise.all(lincsIds.map(id =>
    new Promise((resolve) => {
      SmallMolecule.where({ lincs_id: id }).fetch().then(model => resolve(model.id));
    })
  ));
}

function buildDatasets() {
  debug(`There are ${datasets.length} datasets to insert.`);
  const proms = [];
  let dsSaved = 0;
  datasets.forEach((ds) => {
    const tissueNames = ds.tissues.length ? ds.tissues.map(name => ({ name })) : [];
    const diseaseNames = ds.diseases.length ? ds.diseases.map(name => ({ name })) : [];
    const cellNames = ds.cells.length ? ds.cells.map(name => ({ name })) : [];
    proms.push(
      Promise.all([
        findSmallMolecules(ds.smIds),
        saveMultiple(Tissue, tissueNames, true),
        saveMultiple(Disease, diseaseNames, true),
        saveMultiple(Cell, cellNames, true),
      ])
        .then(meta => {
          const smIds = meta[0];
          debug(smIds);
          const tissueIds = meta[1];
          debug(tissueIds);
          const diseaseIds = meta[2];
          debug(diseaseIds);
          const cellIds = meta[3];
          debug(cellIds);
          saveDataset(
            _.pick(ds, Dataset.prototype.permittedAttributes()),
            smIds,
            tissueIds,
            diseaseIds,
            cellIds
          ).then(() => {
            dsSaved++;
            debug(`${dsSaved} datasets saved.`);
          });
        })
    );
  });
  return Promise.all(proms);
}

knex.raw('select 1+1 as result').then(() => {
  debug('Connection successful.');
  const promises = [];

  symposia.forEach(obj => {
    promises.push(save(Symposium, obj));
  });
  workshops.forEach(obj => {
    promises.push(save(Workshop, obj));
  });
  webinars.forEach(obj => {
    promises.push(save(Webinar, obj));
  });
  fundingOpportunities.forEach(obj => {
    promises.push(save(FundingOpportunity, obj));
  });

  promises.push(
    saveAllSmallMolecules()
      .then(() => {
        debug('All small molecules saved.');
        buildDatasets()
          .then(() => {
            debug('Datasets inserted');
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
