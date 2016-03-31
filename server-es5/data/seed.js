'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _debug2 = require('debug');

var _debug3 = _interopRequireDefault(_debug2);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _Dataset = require('../models/Dataset');

var _Disease = require('../models/Disease');

var _Tissue = require('../models/Tissue');

var _Cell = require('../models/Cell');

var _SmallMolecule = require('../models/SmallMolecule');

var _Author = require('../models/Author');

var _Publication = require('../models/Publication');

var _CompTool = require('../models/CompTool');

var _smallMolecules = require('../../seed/smallMolecules');

var _smallMolecules2 = _interopRequireDefault(_smallMolecules);

var _cellLines = require('../../seed/cellLines');

var _cellLines2 = _interopRequireDefault(_cellLines);

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

var _publications = require('../../seed/publications');

var _publications2 = _interopRequireDefault(_publications);

var _serverConf = require('../serverConf');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = (0, _debug3.default)('app:server:data:seed');

function saveDataset(dsObj, smIds, cellIds) {
  return _Dataset.Dataset.forge(dsObj).save().then(function (dsModel) {
    if (smIds.length) {
      dsModel.smallMolecules().attach(smIds);
    }
    if (cellIds.length) {
      dsModel.cells().attach(cellIds);
    }
  });
}

function insertSmallMolecules() {
  debug('Inserting ' + (0, _keys2.default)(_smallMolecules2.default).length + ' small molecules.');
  var sms = [];
  _lodash2.default.each(_smallMolecules2.default, function (obj) {
    if (obj.lincs_id && obj.lincs_id.length) {
      sms.push((0, _extends3.default)({}, obj, {
        created_at: (0, _moment2.default)().toDate()
      }));
    }
  });
  return _serverConf.knex.batchInsert('small_molecules', sms);
}

function findSmallMolecules(lincsIds) {
  if (!lincsIds.length) {
    return _promise2.default.resolve([]);
  }
  return _serverConf.knex.select('id').from(_SmallMolecule.SmallMolecule.prototype.tableName).whereIn('lincs_id', lincsIds).then(function (results) {
    return results.map(function (result) {
      return result.id;
    });
  });
}

function findEntities(Model, entityNames) {
  if (!entityNames.length) {
    return _promise2.default.resolve([]);
  }
  return _serverConf.knex.select('id').from(Model.prototype.tableName).whereIn('name', entityNames).then(function (results) {
    return results.map(function (result) {
      return result.id;
    });
  });
}

function findCells(cellNames) {
  if (!cellNames.length) {
    return _promise2.default.resolve([]);
  }
  return new _promise2.default(function (resolve, reject) {
    _serverConf.knex.select('id').from('cells').whereIn('name', cellNames).then(function (results) {
      _serverConf.knex.select('cell_id').from('synonyms').whereIn('name', cellNames).then(function (moreResults) {
        var allIds = _lodash2.default.union(results.map(function (res) {
          return res.id;
        }), moreResults.map(function (res) {
          return res.cell_id;
        }));
        resolve(allIds);
      }).catch(function (e) {
        return reject(e);
      });
    }).catch(function (e) {
      return reject(e);
    });
  });
}

function insertTissuesAndDiseases() {
  var tissues = [];
  var diseases = [];
  _cellLines2.default.forEach(function (cl) {
    var tissue = cl.organ_tissue;
    var disease = cl.disease;
    if (!!tissue && tissues.indexOf(tissue) === -1) {
      tissues.push(tissue);
    }
    if (!!disease && diseases.indexOf(disease) === -1) {
      diseases.push(disease);
    }
  });
  var created = (0, _moment2.default)().toDate();
  tissues = tissues.map(function (name) {
    return { name: name, created_at: created };
  });
  diseases = diseases.map(function (name) {
    return { name: name, created_at: created };
  });
  debug('Inserting ' + tissues.length + ' tissues and ' + diseases.length + ' diseases.');
  return _promise2.default.all([_serverConf.knex.insert(tissues).into('organs_tissues'), _serverConf.knex.insert(diseases).into('diseases')]);
}

function insertCellLines() {
  debug('Inserting ' + _cellLines2.default.length + ' cells.');
  return _promise2.default.all(_cellLines2.default.map(function (cl) {
    return new _promise2.default(function (resolve, reject) {
      var tissue = cl.organ_tissue || '';
      var disease = cl.disease || '';
      var synonyms = cl.synonyms || [];
      findEntities(_Tissue.Tissue, [tissue]).then(function (tissueIds) {
        findEntities(_Disease.Disease, [disease]).then(function (diseaseIds) {
          var cell = _lodash2.default.pick(cl, _Cell.Cell.prototype.permittedAttributes());
          _Cell.Cell.forge(cell).save().then(function (clModel) {
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
            var syns = synonyms.map(function (name) {
              return {
                name: name,
                cell_id: clModel.id,
                created_at: (0, _moment2.default)().toDate()
              };
            });
            _serverConf.knex.insert(syns).into('synonyms').then(function () {
              return resolve();
            }).catch(function (e) {
              debug(e);
              reject(e);
            });
          });
        }).catch(function (e) {
          debug(e);
          reject(e);
        });
      }).catch(function (e) {
        debug(e);
        reject(e);
      });
    });
  }));
}

function buildDatasets() {
  debug('Inserting ' + _datasets2.default.length + ' datasets.');
  return _promise2.default.all(_datasets2.default.map(function (ds) {
    return new _promise2.default(function (resolve, reject) {
      findSmallMolecules(ds.smIds).then(function (smIds) {
        return findCells(ds.cells).then(function (cellIds) {
          if (ds.name === 'Kinativ') {
            debug(cellIds);
          }
          saveDataset(_lodash2.default.pick(ds, _Dataset.Dataset.prototype.permittedAttributes()), smIds, cellIds).then(function () {
            resolve();
          });
        }).catch(function (e) {
          debug(e);
          reject(e);
        });
      }).catch(function (e) {
        debug(e);
        reject(e);
      });
    });
  }));
}

function insertPublications() {
  var created = (0, _moment2.default)().toDate();
  var pubs = _publications2.default.map(function (obj) {
    return (0, _extends3.default)({}, obj, { created_at: created });
  });
  var authors = [];
  var toolNames = [];
  var compTools = [];
  pubs.forEach(function (obj) {
    authors = _lodash2.default.union(authors, obj.authors);
    obj.comp_tools.forEach(function (tool) {
      var name = tool.name;

      if (toolNames.indexOf(name) === -1) {
        toolNames.push(name);
        compTools.push(tool);
      }
    });
  });
  var compToolIdMap = {};
  var authorIdMap = {};
  return new _promise2.default(function (resolve, reject) {
    _promise2.default.all(compTools.map(function (tool) {
      return _CompTool.CompTool.forge(tool).save().then(function (model) {
        return compToolIdMap[tool.name] = model.id;
      });
    })).then(function () {
      _promise2.default.all(authors.map(function (name) {
        var author = { name: name, created_at: created };
        return _Author.Author.forge(author).save().then(function (model) {
          return authorIdMap[name] = model.id;
        });
      })).then(function () {
        _promise2.default.all(pubs.map(function (obj) {
          var pub = _lodash2.default.pick(obj, _Publication.Publication.prototype.permittedAttributes());
          return _Publication.Publication.forge(pub).save().then(function (pubModel) {
            var authorIds = obj.authors.map(function (name) {
              return authorIdMap[name];
            });
            if (authorIds.length) {
              pubModel.authors().attach(authorIds);
            }
            var toolIds = obj.comp_tools.map(function (tool) {
              return compToolIdMap[tool.name];
            });
            if (toolIds.length) {
              pubModel.compTools().attach(toolIds);
            }
          });
        })).then(function () {
          return resolve();
        }).catch(function (e) {
          return reject(e);
        });
      }).catch(function (e) {
        return reject(e);
      });
    }).catch(function (e) {
      return reject(e);
    });
  });
}

_serverConf.knex.raw('select 1+1 as result').then(function () {
  debug('Connection successful.');
  var promises = [];
  var created = (0, _moment2.default)().toDate();
  var syms = _symposia2.default.map(function (obj) {
    return (0, _extends3.default)({}, obj, { created_at: created });
  });
  var shops = _workshops2.default.map(function (obj) {
    return (0, _extends3.default)({}, obj, { created_at: created });
  });
  var webs = _webinars2.default.map(function (obj) {
    return (0, _extends3.default)({}, obj, { created_at: created });
  });
  var opps = _fundingOpportunities2.default.map(function (obj) {
    return (0, _extends3.default)({}, obj, { created_at: created });
  });

  promises.push(_serverConf.knex.insert(syms).into('symposia'));
  promises.push(_serverConf.knex.insert(shops).into('workshops'));
  promises.push(_serverConf.knex.insert(webs).into('webinars'));
  promises.push(_serverConf.knex.insert(opps).into('funding_opportunities'));
  promises.push(insertPublications());

  promises.push(new _promise2.default(function (resolve, reject) {
    insertSmallMolecules().then(function () {
      debug('Small molecules inserted.');
      insertTissuesAndDiseases().then(function () {
        debug('Tissues and diseases inserted.');
        insertCellLines().then(function () {
          debug('Cells inserted.');
          buildDatasets().then(function () {
            debug('Datasets inserted.');
            resolve();
          }).catch(function (e) {
            reject(e);
            debug(e);
          });
        }).catch(function (e) {
          reject(e);
          debug(e);
        });
      }).catch(function (e) {
        reject(e);
        debug(e);
      });
    }).catch(function (e) {
      reject(e);
      debug(e);
    });
  }));

  _promise2.default.all(promises).then(function () {
    debug('Database seeded successfully.');
    process.exit(0);
  }).catch(function (e) {
    debug(e);
    process.exit(1);
  });
});