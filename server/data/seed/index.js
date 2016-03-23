import _debug from 'debug';

import { Workshop, Symposium, Webinar, FundingOpportunity } from '../../models';
import symposia from './symposia';
import workshops from './workshops';
import webinars from './webinars';
import fundingOpportunities from './fundingOpportunities';

const debug = _debug('app:server:data:seed');

function save(Model, obj) {
  return new Promise((resolve, reject) => {
    Model
      .forge(obj)
      .save()
      .then(model => resolve(model))
      .catch(e => reject(e));
  });
}

function buildPromises() {
  const promises = [];
  symposia.forEach((sym) => promises.push(save(Symposium, sym)));
  workshops.forEach((shop) => promises.push(save(Workshop, shop)));
  webinars.forEach((web) => promises.push(save(Webinar, web)));
  fundingOpportunities.forEach((opp) => promises.push(save(FundingOpportunity, opp)));
  return promises;
}

Promise
  .all(buildPromises())
  .then(() => {
    debug('Database seeded.');
    process.exit(0);
  })
  .catch(e => {
    debug(e);
    process.exit(1);
  });
