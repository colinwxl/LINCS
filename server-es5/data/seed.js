'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _debug2 = require('debug');

var _debug3 = _interopRequireDefault(_debug2);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _Dataset = require('../models/Dataset');

var _Workshop = require('../models/Workshop');

var _Symposium = require('../models/Symposium');

var _Webinar = require('../models/Webinar');

var _FundingOpportunity = require('../models/FundingOpportunity');

var _Disease = require('../models/Disease');

var _Tissue = require('../models/Tissue');

var _Cell = require('../models/Cell');

var _SmallMolecule = require('../models/SmallMolecule');

var _smallMolecules = require('../../seed/smallMolecules');

var _smallMolecules2 = _interopRequireDefault(_smallMolecules);

var _symposia = require('../../seed/symposia');

var _symposia2 = _interopRequireDefault(_symposia);

var _workshops = require('../../seed/workshops');

var _workshops2 = _interopRequireDefault(_workshops);

var _webinars = require('../../seed/webinars');

var _webinars2 = _interopRequireDefault(_webinars);

var _fundingOpportunities = require('../../seed/fundingOpportunities');

var _fundingOpportunities2 = _interopRequireDefault(_fundingOpportunities);

var _datasets = require('../../seed/datasets');

var _datasets2 = _interopRequireDefault(_datasets);

var _serverConf = require('../serverConf');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = (0, _debug3.default)('app:server:data:seed');

function findSms(lincsIds) {
  return lincsIds.map(function (id) {
    if (allSmallMolecules.hasOwnProperty(id)) {
      return allSmallMolecules[id];
    }
    return { lincs_id: id };
  });
}

function saveDataset(dsObj, smIds, tissueIds, diseaseIds, cellIds) {
  return new _promise2.default(function (resolve) {
    _Dataset.Dataset.forge(dsObj).save().then(function (dsModel) {
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
    }).then(function () {
      return resolve();
    }).catch(function (e) {
      debug(e);
      process.exit(1);
    });
  });
}

function save(Model, obj, returnId) {
  return new _promise2.default(function (resolve, reject) {
    Model.forge(obj).save().then(function (model) {
      if (returnId) {
        resolve(model.id);
      }
      resolve(model);
    }).catch(function (e) {
      // Only time this fails is if a lincs_id already exists.
      if (!obj.hasOwnProperty('lincs_id') || !obj.lincs_id) {
        reject(e);
        return;
      }
      debug(obj.lincs_id);
      Model.where({ lincs_id: obj.lincs_id }).fetch().then(function (model) {
        if (returnId) {
          resolve(model.id);
        }
        resolve(model);
      });
    });
  });
}

function saveMultiple(Model, objArr, returnIds) {
  return objArr.length ? _promise2.default.all(objArr.map(function (obj) {
    return save(Model, obj, returnIds);
  })) : _promise2.default.resolve([]);
}

function saveAllSmallMolecules() {
  var proms = [];
  _lodash2.default.each(_smallMolecules2.default, function (obj) {
    proms.push(save(_SmallMolecule.SmallMolecule, obj));
  });
  return _promise2.default.all(proms);
}

function findSmallMolecules(lincsIds) {
  if (!lincsIds.length) {
    return _promise2.default.resolve([]);
  }
  return _promise2.default.all(lincsIds.map(function (id) {
    return _SmallMolecule.SmallMolecule.where({ lincs_id: id }).fetch().then(function (model) {
      return model.id;
    });
  }));
}

_serverConf.knex.raw('select 1+1 as result').then(function () {
  var promises = [];

  _symposia2.default.forEach(function (obj) {
    return promises.push(save(_Symposium.Symposium, obj));
  });
  _workshops2.default.forEach(function (obj) {
    return promises.push(save(_Workshop.Workshop, obj));
  });
  _webinars2.default.forEach(function (obj) {
    return promises.push(save(_Webinar.Webinar, obj));
  });
  _fundingOpportunities2.default.forEach(function (obj) {
    return promises.push(save(_FundingOpportunity.FundingOpportunity, obj));
  });

  var dsSaved = 0;

  _datasets2.default.forEach(function (ds) {
    var tissueNames = ds.tissues.length ? ds.tissues.map(function (name) {
      return { name: name };
    }) : [];
    var diseaseNames = ds.diseases.length ? ds.diseases.map(function (name) {
      return { name: name };
    }) : [];
    var cellNames = ds.cells.length ? ds.cells.map(function (name) {
      return { name: name };
    }) : [];
    promises.push(saveAllSmallMolecules().then(function () {
      debug('All small molecules saved.');
      findSmallMolecules(ds.smIds).then(function (smIds) {
        debug('Small molecules saved.');
        saveMultiple(_Tissue.Tissue, tissueNames, true).then(function (tissueIds) {
          debug('Tissues saved.');
          saveMultiple(_Disease.Disease, diseaseNames, true).then(function (diseaseIds) {
            debug('Diseases saved.');
            saveMultiple(_Cell.Cell, cellNames, true).then(function (cellIds) {
              debug('Cells saved');
              saveDataset(_lodash2.default.pick(ds, _Dataset.Dataset.prototype.permittedAttributes()), smIds, tissueIds, diseaseIds, cellIds).then(function () {
                dsSaved++;
                debug(dsSaved + ' datasets saved.');
              });
            });
          });
        });
      });
    }));
  });

  debug('Connection successful.');
  debug('There are ' + _datasets2.default.length + ' datasets to insert.');
  _promise2.default.all(promises).then(function () {
    debug('Database seeded.');
    process.exit(0);
  }).catch(function (e) {
    debug(e);
    process.exit(1);
  });
});