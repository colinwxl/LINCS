import _debug from 'debug';
import _ from 'lodash';

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

function findSms(lincsIds) {
  return lincsIds.map(id => {
    if (allSmallMolecules.hasOwnProperty(id)) {
      return allSmallMolecules[id];
    }
    return { lincs_id: id };
  });
}

function saveDataset(dsObj, smIds, tissueIds, diseaseIds, cellIds) {
  return new Promise((resolve) => {
    Dataset
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
      })
      .then(() => resolve())
      .catch(e => {
        debug(e);
        process.exit(1);
      });
  });
}

function save(Model, obj, returnId) {
  return new Promise((resolve, reject) => {
    Model.forge(obj).save()
      .then(model => {
        if (returnId) {
          resolve(model.id);
        }
        resolve(model);
      })
      .catch(e => {
        // Only time this fails is if a lincs_id already exists.
        if (!obj.hasOwnProperty('lincs_id') || !obj.lincs_id) {
          reject(e);
          return;
        }
        debug(obj.lincs_id);
        Model.where({ lincs_id: obj.lincs_id }).fetch().then(model => {
          if (returnId) {
            resolve(model.id);
          }
          resolve(model);
        });
      });
  });
}

function saveMultiple(Model, objArr, returnIds) {
  return objArr.length
    ? Promise.all(objArr.map((obj) => save(Model, obj, returnIds)))
    : Promise.resolve([]);
}

function saveAllSmallMolecules() {
  const proms = [];
  _.each(smallMolecules, (obj) => {
    proms.push(save(SmallMolecule, obj));
  });
  return Promise.all(proms);
}

function findSmallMolecules(lincsIds) {
  if (!lincsIds.length) {
    return Promise.resolve([]);
  }
  return Promise.all(lincsIds.map(id =>
    SmallMolecule.where({ lincs_id: id }).fetch().then(model => model.id)
  ));
}

knex.raw('select 1+1 as result').then(() => {
  const promises = [];

  symposia.forEach(obj => promises.push(save(Symposium, obj)));
  workshops.forEach(obj => promises.push(save(Workshop, obj)));
  webinars.forEach(obj => promises.push(save(Webinar, obj)));
  fundingOpportunities.forEach(obj => promises.push(save(FundingOpportunity, obj)));


  let dsSaved = 0;

  datasets.forEach((ds) => {
    const tissueNames = ds.tissues.length ? ds.tissues.map(name => ({ name })) : [];
    const diseaseNames = ds.diseases.length ? ds.diseases.map(name => ({ name })) : [];
    const cellNames = ds.cells.length ? ds.cells.map(name => ({ name })) : [];
    promises.push(
      saveAllSmallMolecules()
        .then(() => {
          debug('All small molecules saved.');
          findSmallMolecules(ds.smIds)
            .then(smIds => {
              debug('Small molecules saved.');
              saveMultiple(Tissue, tissueNames, true)
                .then(tissueIds => {
                  debug('Tissues saved.');
                  saveMultiple(Disease, diseaseNames, true)
                    .then(diseaseIds => {
                      debug('Diseases saved.');
                      saveMultiple(Cell, cellNames, true)
                        .then(cellIds => {
                          debug('Cells saved');
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
                        });
                    });
                });
            });
        })
    );
  });

  debug('Connection successful.');
  debug(`There are ${datasets.length} datasets to insert.`);
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
