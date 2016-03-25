'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _debug2 = require('debug');

var _debug3 = _interopRequireDefault(_debug2);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

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

function saveDataset(dsObj, smIds, tissueIds, diseaseIds, cellIds) {
  return _Dataset.Dataset.forge(dsObj).save().then(function (dsModel) {
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
  return Model.forge(obj).save().then(function (model) {
    if (returnId) {
      return model.id;
    }
    return model;
  }).catch(function (e) {
    return debug(e);
  });
}

function saveMultiple(Model, objArr, returnIds) {
  return objArr.length ? _promise2.default.all(objArr.map(function (obj) {
    return save(Model, obj, returnIds);
  })) : _promise2.default.resolve([]);
}

function saveAllSmallMolecules() {
  debug('Inserting ' + (0, _keys2.default)(_smallMolecules2.default).length + ' small molecules.');
  var sms = [];
  _lodash2.default.each(_smallMolecules2.default, function (obj) {
    sms.push((0, _extends3.default)({}, obj, {
      created_at: (0, _moment2.default)().toDate()
    }));
  });
  return _serverConf.knex.insert(sms).into('small_molecules');
}

function findSmallMolecules(lincsIds) {
  if (!lincsIds.length) {
    return _promise2.default.resolve([]);
  }
  return _promise2.default.all(lincsIds.map(function (id) {
    return new _promise2.default(function (resolve) {
      _SmallMolecule.SmallMolecule.where({ lincs_id: id }).fetch().then(function (model) {
        return resolve(model.id);
      });
    });
  }));
}

function buildDatasets() {
  debug('There are ' + _datasets2.default.length + ' datasets to insert.');
  var proms = [];
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
    proms.push(_promise2.default.all([findSmallMolecules(ds.smIds), saveMultiple(_Tissue.Tissue, tissueNames, true), saveMultiple(_Disease.Disease, diseaseNames, true), saveMultiple(_Cell.Cell, cellNames, true)]).then(function (meta) {
      var smIds = meta[0];
      debug(smIds);
      var tissueIds = meta[1];
      debug(tissueIds);
      var diseaseIds = meta[2];
      debug(diseaseIds);
      var cellIds = meta[3];
      debug(cellIds);
      saveDataset(_lodash2.default.pick(ds, _Dataset.Dataset.prototype.permittedAttributes()), smIds, tissueIds, diseaseIds, cellIds).then(function () {
        dsSaved++;
        debug(dsSaved + ' datasets saved.');
      });
    }));
  });
  return _promise2.default.all(proms);
}

_serverConf.knex.raw('select 1+1 as result').then(function () {
  debug('Connection successful.');
  var promises = [];

  _symposia2.default.forEach(function (obj) {
    promises.push(save(_Symposium.Symposium, obj));
  });
  _workshops2.default.forEach(function (obj) {
    promises.push(save(_Workshop.Workshop, obj));
  });
  _webinars2.default.forEach(function (obj) {
    promises.push(save(_Webinar.Webinar, obj));
  });
  _fundingOpportunities2.default.forEach(function (obj) {
    promises.push(save(_FundingOpportunity.FundingOpportunity, obj));
  });

  promises.push(saveAllSmallMolecules().then(function () {
    debug('All small molecules saved.');
    buildDatasets().then(function () {
      debug('Datasets inserted');
    });
  }));

  _promise2.default.all(promises).then(function () {
    debug('Database seeded.');
    process.exit(0);
  }).catch(function (e) {
    debug(e);
    process.exit(1);
  });
});