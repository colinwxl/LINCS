import _debug from 'debug';
import axios from 'axios';
import _ from 'lodash';

import { Dataset } from '../../models/Dataset';
import { Workshop } from '../../models/Workshop';
import { Symposium } from '../../models/Symposium';
import { Webinar } from '../../models/Webinar';
import { FundingOpportunity } from '../../models/FundingOpportunity';
import { Disease } from '../../models/Disease';
import { Tissue } from '../../models/Tissue';
import { Cell } from '../../models/Cell';
import { SmallMolecule } from '../../models/SmallMolecule';
import symposia from './symposia';
import workshops from './workshops';
import webinars from './webinars';
import fundingOpportunities from './fundingOpportunities';
import datasets from './datasets';

const debug = _debug('app:server:data:seed');

function saveDataset(dsObj, smIds, tissueIds, diseaseIds, cellIds) {
  return new Dataset(dsObj)
    .save()
    .then(dsModel => {
      console.log(dsModel.cells());
      console.log(dsModel.tissues());
      console.log(dsModel.smallMolecules());
      console.log(dsModel.diseases());
      // console.log(dsModel.smallMolecules());
      // dsModel
      //   .smallMolecules()
      //   .attach(smIds);
        // .tissues()
        // .attach(tissueIds)
        // .diseases()
        // .attach(diseaseIds)
        // .cells()
        // .attach(cellIds);
    });
}

function save(Model, obj, returnId) {
  return new Promise((resolve, reject) => {
    Model
      .forge(obj)
      .save()
      .then(model => {
        if (returnId) {
          resolve(model.id);
        } else {
          resolve(model);
        }
      })
      .catch(e => reject(e));
  });
}

function saveMultiple(Model, objArr, returnId) {
  return Promise.all(objArr.map(obj =>
    new Promise((resolve, reject) => {
      Model
        .forge(obj)
        .save()
        .then(model => {
          if (returnId) {
            resolve(model.id);
          } else {
            resolve(model);
          }
        })
        .catch(e => reject(e));
    })
  ));
}

function saveSmallMolecules(lincsIds) {
  return Promise.all(lincsIds.map((lincsId) => {
    const url = `http://lincsportal.ccs.miami.edu/dcic/api/fetchentities?searchTerm=lincsidentifier:%22${lincsId}%22%20&limit=1`;
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then((response) => {
          const data = response.data.results.documents[0];
          const sm = {
            name: data.entityName[0],
            lincs_id: data.lincsidentifier[0],
            source: data.source[0] || null,
            smiles_parent: data.SM_SMILES_Parent[0] || null,
            molecular_mass: data.SM_Molecular_Mass[0] || null,
            bioactivity_information: data.SM_BioActivity_Information[0] || null,
            inchi_parent: data.SM_InChi_Parent[0] || null,
            pubchem_cid: data.SM_PubChem_CID[0] || null,
          };
          save(SmallMolecule, sm, true)
            .then(id => resolve(id))
            .catch(e => reject(e));
        });
    });
  }));
}

const promises = [];

symposia.forEach((sym) => promises.push(save(Symposium, sym)));
workshops.forEach((shop) => promises.push(save(Workshop, shop)));
webinars.forEach((web) => promises.push(save(Webinar, web)));
fundingOpportunities.forEach((opp) => promises.push(save(FundingOpportunity, opp)));

function buildMetadata(smallMoleculeIds, tissues, diseases, cells) {
  return Promise.all([
    saveSmallMolecules(smallMoleculeIds),
    saveMultiple(Tissue, tissues, true),
    saveMultiple(Disease, diseases, true),
    saveMultiple(Cell, cells, true),
  ]);
}

datasets.forEach((ds) => {
  promises.push(
    buildMetadata(
      ds.smIds,
      ds.tissues.map(name => ({ name })),
      ds.diseases.map(name => ({ name })),
      ds.cells.map(name => ({ name }))
    )
    .then((meta) => {
      const smIds = meta[0];
      const tissueIds = meta[1];
      const diseaseIds = meta[2];
      const cellIds = meta[3];
      saveDataset(
        _.pick(ds, Dataset.prototype.permittedAttributes()),
        smIds,
        tissueIds,
        diseaseIds,
        cellIds
      );
    })
    .catch(e => console.log(e))
  );
});


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
