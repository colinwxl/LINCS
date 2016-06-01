'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

/**
 * Utility functions
 * ----------------------------------------------------------------------------*/

var getIdsFromFullTextSearch = function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee15(table, fields, searchTerm, limit) {
    var ids, bindings, sql, resp;
    return _regenerator2.default.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            ids = [];
            bindings = [];
            sql = 'SELECT id FROM {0} WHERE'; //MATCH(description) AGAINST(?)';

            sql = sql.replace('{0}', table);
            fields.forEach(function (field, i) {
              if (i != 0) {
                sql += ' OR';
              }
              // IMPORTANT: Let Knex.js handle the bindings to prevent SQL injection.
              sql += ' MATCH (' + field + ') AGAINST(?)';
              bindings.push(searchTerm);
            });
            sql += ' LIMIT ' + limit;

            _context15.next = 8;
            return _serverConf.knex.raw(sql, bindings);

          case 8:
            resp = _context15.sent;

            resp[0].forEach(function (doc) {
              var id = parseInt(doc.id, 10);
              ids.push(id);
            });

            return _context15.abrupt('return', ids);

          case 11:
          case 'end':
            return _context15.stop();
        }
      }
    }, _callee15, this);
  }));
  return function getIdsFromFullTextSearch(_x13, _x14, _x15, _x16) {
    return ref.apply(this, arguments);
  };
}();

/**
 * Generates a dataset reference in the
 * {@link http://refman.com/sites/rm/files/m/direct_export_ris.pdf RIS format}
 * @param  {Object} ds The dataset to reference
 * @return {Promise}   A promise that resolves with the filePath and filename of the
 * RIS file to be downloaded
 */


var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _koaSendfile = require('koa-sendfile');

var _koaSendfile2 = _interopRequireDefault(_koaSendfile);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _debug2 = require('debug');

var _debug3 = _interopRequireDefault(_debug2);

var _serverConf = require('../serverConf');

var _Dataset = require('../models/Dataset');

var _Center = require('../models/Center');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint no-param-reassign:0 */

var debug = (0, _debug3.default)('app:server:routes:datasets');


var router = new _koaRouter2.default({
  prefix: '/LINCS/api/v1/datasets'
});

/**
 * Routes
 * ----------------------------------------------------------------------------*/

/**
 * Fetch all datasets and the relationships provided in the `include` query parameter.
 */
router.get('/', function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx) {
    var withRelated, datasets, includePivot;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Include the dataset's center by default.
            // Add desired relationships in the include query parameter
            // Items of the array are formatted for the withRelated option of bookshelf .fetchAll()
            // http://bookshelfjs.org/#Model-instance-fetch
            // Nested relationships (tissues of cells) are loaded using '.'
            // Ex. --> ...?include=center,smallMolecules,cells,cells.tissues,cells.diseases,cells.synonyms
            withRelated = ['center'];

            if (ctx.query.include) {
              withRelated = ctx.query.include.split(',');
            }
            _context.prev = 2;
            _context.next = 5;
            return _Dataset.Dataset.fetchAll({ withRelated: withRelated });

          case 5:
            datasets = _context.sent;

            // Omit pivot by default
            includePivot = !!ctx.query.includePivot;

            ctx.body = datasets.toJSON({ omitPivot: !includePivot });
            _context.next = 14;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context['catch'](2);

            debug(_context.t0);
            ctx.throw(500, 'An error occurred obtaining datasets.');

          case 14:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[2, 10]]);
  }));
  return function (_x) {
    return ref.apply(this, arguments);
  };
}());

router.get('/clicks', function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(ctx) {
    var clicks;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Dataset.Dataset.fetchAll({ columns: ['id', 'lincs_id', 'method', 'clicks'] });

          case 3:
            clicks = _context2.sent;

            ctx.body = clicks.toJSON();
            _context2.next = 11;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2['catch'](0);

            debug(_context2.t0);
            ctx.throw(500, 'An error occurred obtaining datasets.');

          case 11:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[0, 7]]);
  }));
  return function (_x2) {
    return ref.apply(this, arguments);
  };
}());

/**
 * Fetch an array of datasets that are the most recent dataset from each center.
 */
router.get('/recent', function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(ctx) {
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            return _context4.delegateYield(_regenerator2.default.mark(function _callee3() {
              var centers, centersWithDatasets, datasetIds, datasets;
              return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return _Center.Center.fetchAll({
                        withRelated: [{ datasets: function datasets(query) {
                            return query.orderBy('date_retrieved', 'desc');
                          } }]
                      }).then(function (models) {
                        return models.toJSON({ omitPivot: true });
                      });

                    case 2:
                      centers = _context3.sent;

                      // Remove centers without datasets
                      centersWithDatasets = centers.filter(function (center) {
                        return center.datasets.length;
                      });
                      // Get the id of the most recent dataset of each center

                      datasetIds = centersWithDatasets.map(function (center) {
                        return center.datasets[0].id;
                      });
                      // Query for these datasets

                      _context3.next = 7;
                      return _Dataset.Dataset.query(function (qb) {
                        return qb.whereIn('id', datasetIds);
                      }).fetchAll({ withRelated: ['center'] }).then(function (models) {
                        return models.toJSON({ omitPivot: true });
                      });

                    case 7:
                      datasets = _context3.sent;

                      ctx.body = datasets;

                    case 9:
                    case 'end':
                      return _context3.stop();
                  }
                }
              }, _callee3, undefined);
            })(), 't0', 2);

          case 2:
            _context4.next = 8;
            break;

          case 4:
            _context4.prev = 4;
            _context4.t1 = _context4['catch'](0);

            debug(_context4.t1);
            ctx.throw(500, 'An error occurred obtaining datasets.');

          case 8:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, undefined, [[0, 4]]);
  }));
  return function (_x3) {
    return ref.apply(this, arguments);
  };
}());

/**
 * Fetch all of the information needed for the DataTree. Speeds up initial load of
 * the tree on the front end.
 */
router.get('/tree', function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(ctx) {
    var assays, classes, methods, centers, alphabetical, datasets, dateDatasetMap, dates;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _Dataset.Dataset.query(function (qb) {
              return qb.distinct('assay').select().orderBy('assay', 'asc');
            }).fetchAll().then(function (models) {
              return models.toJSON().map(function (obj) {
                return obj.assay;
              });
            });

          case 2:
            assays = _context5.sent;
            _context5.next = 5;
            return _Dataset.Dataset.query(function (qb) {
              return qb.distinct('classification').select().orderBy('classification', 'asc');
            }).fetchAll().then(function (models) {
              return models.toJSON().map(function (obj) {
                return obj.classification;
              });
            });

          case 5:
            classes = _context5.sent;
            _context5.next = 8;
            return _Dataset.Dataset.query(function (qb) {
              return qb.distinct('method').select().orderBy('method', 'asc');
            }).fetchAll().then(function (models) {
              return models.toJSON().map(function (obj) {
                return obj.method;
              });
            });

          case 8:
            methods = _context5.sent;
            _context5.next = 11;
            return _Center.Center.fetchAll({ withRelated: ['datasets'] }).then(function (centerModels) {
              return centerModels.toJSON({ omitPivot: true });
            }).then(function (centerArr) {
              return centerArr.filter(function (centerObj) {
                return !!centerObj.datasets.length;
              }).map(function (center) {
                return center.name;
              }).sort();
            });

          case 11:
            centers = _context5.sent;
            _context5.next = 14;
            return _Dataset.Dataset.query(function (qb) {
              return qb.select('id').orderBy('method', 'asc');
            }).fetchAll().then(function (models) {
              return models.toJSON().map(function (obj) {
                return obj.id;
              });
            });

          case 14:
            alphabetical = _context5.sent;
            _context5.next = 17;
            return _Dataset.Dataset.fetchAll().then(function (models) {
              return models.toJSON();
            });

          case 17:
            datasets = _context5.sent;

            // So here we have a date dataset map and an array of dates.
            // dateDatasetMap is structured like { 2016: { 1 (month index): [datasets] } }
            dateDatasetMap = {};
            // dates is structured like [{ year: 2016, months: [1, 2, 3 (month indicies)] }]

            dates = [];

            // Dates only contains years and months that exist in the dateDatasetMap so this is essentially
            // a way to sort the keys of dateDatasetMap to ensure that we can sort the years and
            // months in the proper order in the tree.

            datasets.forEach(function (ds) {
              var date = (0, _moment2.default)(ds.dateRetrieved);
              var month = date.month();
              var year = date.year();
              // Check if an object exists in dates with the year of the current dataset
              if (dates.filter(function (obj) {
                return obj.year === year;
              }).length === 0) {
                dates.push({ year: year, months: [month] });
              } else {
                // Find the object with the correct year and add the month of the current dataset if it does
                // not exist there already
                dates.forEach(function (obj) {
                  if (obj.year === year && obj.months.indexOf(month) === -1) {
                    obj.months.push(month);
                  }
                });
              }
              // Build the dateDatasetMap
              if (dateDatasetMap[year]) {
                if (dateDatasetMap[year][month]) {
                  dateDatasetMap[year][month].push(ds.id);
                } else {
                  dateDatasetMap[year][month] = [ds.id];
                }
              } else {
                dateDatasetMap[year] = (0, _defineProperty3.default)({}, month, [ds.id]);
              }
            });
            // Sort the objects in the dates array by their year
            dates = dates.sort(function (a, b) {
              var result = a.year < b.year;
              return result ? 1 : -1;
            });
            // Sort the months array in each object in the dates array
            dates.forEach(function (dateObj) {
              dateObj.months.sort(function (a, b) {
                return b - a;
              });
            });
            ctx.body = { assays: assays, classes: classes, methods: methods, centers: centers, alphabetical: alphabetical, dates: dates, dateDatasetMap: dateDatasetMap };

          case 24:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, undefined);
  }));
  return function (_x4) {
    return ref.apply(this, arguments);
  };
}());

/**
 * Search the datasets based on the query given in the `q` query parameter.
 */
router.get('/search', function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6(ctx) {
    var limit, dsIds, cellIds, smIds, centerIds, dsetsWithCells, dsetsWithSms, dsetsWithCenters, datasetIds, withRelated, datasets, includePivot;
    return _regenerator2.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            if (!ctx.query.q || ctx.query.q === '') {
              ctx.throw(400, 'Query parameter q required for search.');
            }

            // Get row IDs based on full-text searches of table fields.
            // --------------------------------------------------------------------------
            limit = ctx.query.limit || 100;
            _context6.next = 4;
            return getIdsFromFullTextSearch('datasets', ['description', 'full_assay_name', 'classification', 'assay', 'method', 'physical_detection', 'lincs_id'], ctx.query.q, limit);

          case 4:
            dsIds = _context6.sent;
            _context6.next = 7;
            return getIdsFromFullTextSearch('cells', ['name', 'lincs_id', 'source'], ctx.query.q, limit);

          case 7:
            cellIds = _context6.sent;
            _context6.next = 10;
            return getIdsFromFullTextSearch('small_molecules', ['pubchem_cid', 'name', 'source', 'lincs_id'], ctx.query.q, limit);

          case 10:
            smIds = _context6.sent;
            _context6.next = 13;
            return getIdsFromFullTextSearch('centers', ['name', 'description'], ctx.query.q, limit);

          case 13:
            centerIds = _context6.sent;
            _context6.next = 16;
            return _serverConf.knex.select('dataset_id').from('cells_datasets').whereIn('cell_id', cellIds);

          case 16:
            dsetsWithCells = _context6.sent;
            _context6.next = 19;
            return _serverConf.knex.select('dataset_id').from('small_molecules_datasets').whereIn('small_molecule_id', smIds);

          case 19:
            dsetsWithSms = _context6.sent;
            _context6.next = 22;
            return _serverConf.knex.select('id').from('datasets').whereIn('center_id', centerIds);

          case 22:
            dsetsWithCenters = _context6.sent;


            // Concatenate dataset IDs with IDs from other Knex queries. We don't have to
            // verify that the IDs are unique because Knex will use `WHERE IN`.
            // --------------------------------------------------------------------------
            datasetIds = dsIds.concat(dsetsWithCells.map(function (obj) {
              return obj.dataset_id;
            }), dsetsWithSms.map(function (obj) {
              return obj.dataset_id;
            }), dsetsWithCenters.map(function (obj) {
              return obj.id;
            }));

            // Fetch the datasets with the gathered ids.
            // Include the dataset's center by default.
            // Add desired relationships in the include query parameter
            // Items of the array are formatted for the withRelated option of bookshelf .fetchAll()
            // http://bookshelfjs.org/#Model-instance-fetch
            // Nested relationships (tissues of cells) are loaded using '.'
            // Ex. --> ...?include=center,smallMolecules,cells,cells.tissues,cells.diseases,cells.synonyms

            withRelated = ['center'];

            if (ctx.query.include) {
              withRelated = ctx.query.include.split(',');
            }
            _context6.next = 28;
            return _Dataset.Dataset.query(function (qb) {
              return qb.whereIn('id', datasetIds);
            }).fetchAll({ withRelated: withRelated });

          case 28:
            datasets = _context6.sent;


            // Omit the pivot included by bookshelf in the .toJSON() method by default.
            includePivot = !!ctx.query.includePivot;

            ctx.body = datasets.toJSON({ omitPivot: !includePivot });

          case 31:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, undefined);
  }));
  return function (_x5) {
    return ref.apply(this, arguments);
  };
}());

/**
 * Increment the number of clicks on a dataset.
 * @param {Array} ctx.request.body.datasetIds Dataset ids whose clicks need to be incremented.
 */
router.post('/clicks/increment', function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7(ctx) {
    var datasetIds, includePivot, dsModels;
    return _regenerator2.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            datasetIds = ctx.request.body.datasetIds;
            includePivot = !!ctx.query.includePivot;

            if (!(!datasetIds || !datasetIds.length)) {
              _context7.next = 5;
              break;
            }

            ctx.throw(400, 'Dataset Ids required with request.');
            return _context7.abrupt('return');

          case 5:
            _context7.prev = 5;
            _context7.next = 8;
            return _Dataset.Dataset.query(function (qb) {
              return qb.whereIn('id', datasetIds);
            }).fetchAll({
              withRelated: ['center', 'cells', 'cells.tissues', 'cells.diseases', 'cells.synonyms'
              // 'smallMolecules',
              ]
            });

          case 8:
            dsModels = _context7.sent;
            _context7.next = 11;
            return _promise2.default.all(dsModels.map(function (model) {
              var clicks = model.get('clicks');
              // Omit pivot by default
              return model.save({ clicks: ++clicks }, { patch: true, required: true }).then(function (newModel) {
                return newModel.toJSON({ omitPivot: !includePivot });
              });
            }));

          case 11:
            ctx.body = _context7.sent;
            _context7.next = 18;
            break;

          case 14:
            _context7.prev = 14;
            _context7.t0 = _context7['catch'](5);

            debug(_context7.t0);
            ctx.throw(500, 'An error occurred obtaining datasets.');

          case 18:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, undefined, [[5, 14]]);
  }));
  return function (_x6) {
    return ref.apply(this, arguments);
  };
}());

/**
 * Fetches a specific dataset
 * @param  {String} id The id of the dataset to be fetched.
 */
router.get('/:id', function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee9(ctx) {
    var id, withRelated;
    return _regenerator2.default.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            id = -1;
            // Include the dataset's center by default.
            // Add desired relationships in the include query parameter
            // Items of the array are formatted for the withRelated option of bookshelf .fetchAll()
            // http://bookshelfjs.org/#Model-instance-fetch
            // Nested relationships (tissues of cells) are loaded using '.'
            // Ex. --> ...?include=center,smallMolecules,cells,cells.tissues,cells.diseases,cells.synonyms

            withRelated = ['center'];

            if (ctx.query.include) {
              withRelated = ctx.query.include.split(',');
            }
            try {
              id = parseInt(ctx.params.id, 10);
            } catch (e) {
              debug(e);
              ctx.throw(400, 'Dataset Id must be a number');
            }
            _context9.prev = 4;
            return _context9.delegateYield(_regenerator2.default.mark(function _callee8() {
              var includePivot, dataset;
              return _regenerator2.default.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      includePivot = !!ctx.query.includePivot;
                      // Omit pivot by default

                      _context8.next = 3;
                      return _Dataset.Dataset.where('id', id).fetch({ withRelated: withRelated }).then(function (model) {
                        return model.toJSON({ omitPivot: !includePivot });
                      });

                    case 3:
                      dataset = _context8.sent;

                      ctx.body = dataset;

                    case 5:
                    case 'end':
                      return _context8.stop();
                  }
                }
              }, _callee8, undefined);
            })(), 't0', 6);

          case 6:
            _context9.next = 12;
            break;

          case 8:
            _context9.prev = 8;
            _context9.t1 = _context9['catch'](4);

            debug(_context9.t1);
            ctx.throw(500, 'An error occurred obtaining datasets.');

          case 12:
          case 'end':
            return _context9.stop();
        }
      }
    }, _callee9, undefined, [[4, 8]]);
  }));
  return function (_x7) {
    return ref.apply(this, arguments);
  };
}());

/**
 * Downloads the Clustergrammer network for the given dataset id
 * @param  {String} id The dataset id for which the Clustergrammer network will be downloaded.
 */
router.get('/:id/network', function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee10(ctx) {
    var id, dataset, network;
    return _regenerator2.default.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            id = -1;
            _context10.prev = 1;

            id = parseInt(ctx.params.id, 10);
            _context10.next = 10;
            break;

          case 5:
            _context10.prev = 5;
            _context10.t0 = _context10['catch'](1);

            debug(_context10.t0);
            ctx.throw(400, 'Dataset Id must be a number');
            return _context10.abrupt('return');

          case 10:
            _context10.next = 12;
            return _Dataset.Dataset.where('id', id).fetch({ columns: ['lincs_id'] }).then(function (dsModel) {
              return dsModel.toJSON();
            });

          case 12:
            dataset = _context10.sent;

            // Here we are trying to load a file with name of the dataset's lincs id. If it exists, in
            // the ../networks folder, that means a clustergram is available. If that's the case, send
            // the JSON. If it doesn't exist, an error will be thrown and a 400 response will be sent
            // in the catch {} block.
            network = void 0;
            _context10.prev = 14;

            network = require('../networks/' + dataset.lincsId + '.json'); // eslint-disable-line
            _context10.next = 23;
            break;

          case 18:
            _context10.prev = 18;
            _context10.t1 = _context10['catch'](14);

            debug(_context10.t1);
            ctx.throw(400, 'Network is not available for this dataset.');
            return _context10.abrupt('return');

          case 23:
            ctx.body = !!network ? network : {};

          case 24:
          case 'end':
            return _context10.stop();
        }
      }
    }, _callee10, undefined, [[1, 5], [14, 18]]);
  }));
  return function (_x8) {
    return ref.apply(this, arguments);
  };
}());

/**
 * Downloads the raw data package for the given dataset id
 * @param  {String} id The dataset id for which the raw data package will be downloaded.
 */
router.get('/:id/download', function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee11(ctx) {
    var dataset, filename, filePath;
    return _regenerator2.default.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            // Dataset files exist in /usr/src/dist/files/datasets/...
            // However, this folder is mounted from HDFS when the application is deployed.
            // This is done because the files can get very large. The files can be found at
            // http://elizabeth:50070/explorer.html#/apps/lincs/datasets
            if (process.env.NODE_ENV !== 'production') {
              ctx.throw(400, 'Datasets can only be downloaded in production.');
            }
            _context11.prev = 1;
            _context11.next = 4;
            return _Dataset.Dataset.where('id', ctx.params.id).fetch();

          case 4:
            dataset = _context11.sent;

            dataset = dataset.toJSON();
            filename = dataset.lincsId + '-' + dataset.classification + '-' + dataset.method + '.tar.gz';
            filePath = '/usr/src/dist/files/datasets/' + dataset.lincsId + '.tar.gz';

            if (dataset.method === 'KINOMEScan') {
              filename = dataset.classification + '-KINOMEScan.tar.gz';
              filePath = '/usr/src/dist/files/datasets/KINOMEScan.zip';
            } else if (dataset.method === 'KiNativ') {
              filename = dataset.classification + '-KiNativ.tar.gz';
              filePath = '/usr/src/dist/files/datasets/KiNativ.zip';
            }
            ctx.set('Content-disposition', 'attachment; filename=' + filename);
            // Use koa-sendfile to send the file, given the path.
            _context11.next = 12;
            return (0, _koaSendfile2.default)(ctx, filePath);

          case 12:
            if (!ctx.status) {
              ctx.throw(500, 'An error occurred downloading the dataset package.');
            }
            _context11.next = 19;
            break;

          case 15:
            _context11.prev = 15;
            _context11.t0 = _context11['catch'](1);

            debug(_context11.t0);
            ctx.throw(500, 'An error occurred downloading the dataset package.');

          case 19:
          case 'end':
            return _context11.stop();
        }
      }
    }, _callee11, undefined, [[1, 15]]);
  }));
  return function (_x9) {
    return ref.apply(this, arguments);
  };
}());

/**
 * Downloads the gct file for the given dataset id
 * @param  {String} id The dataset id for which the gct file will be downloaded.
 */
router.get('/:id/download/gct', function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee12(ctx) {
    var dataset, filename, filePath;
    return _regenerator2.default.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            // Dataset files exist in /usr/src/dist/files/datasets/...
            // However, this folder is mounted from HDFS when the application is deployed.
            // This is done because the files can get very large. The files can be found at
            // http://elizabeth:50070/explorer.html#/apps/lincs/datasets
            if (process.env.NODE_ENV !== 'production') {
              ctx.throw(400, 'GCT files can only be downloaded in production.');
            }
            _context12.prev = 1;
            _context12.next = 4;
            return _Dataset.Dataset.where('id', ctx.params.id).fetch().then(function (model) {
              return model.toJSON();
            });

          case 4:
            dataset = _context12.sent;
            filename = dataset.lincsId + '-' + dataset.classification + '-' + dataset.method + '.gct';
            filePath = '/usr/src/dist/files/datasets/' + dataset.lincsId + '.gct';

            if (dataset.method === 'KINOMEScan') {
              filename = dataset.classification + '-KINOMEScan.gct';
              filePath = '/usr/src/dist/files/datasets/KINOMEScan.gct';
            } else if (dataset.method === 'KiNativ') {
              filename = dataset.classification + '-KiNativ.gct';
              filePath = '/usr/src/dist/files/datasets/KiNativ.gct';
            }
            ctx.set('Content-disposition', 'attachment; filename=' + filename);
            // Use koa-sendfile to send the file, given the path.
            _context12.next = 11;
            return (0, _koaSendfile2.default)(ctx, filePath);

          case 11:
            if (!ctx.status) {
              ctx.throw(400, 'An error occurred downloading the gct file. It may not be available for this dataset.');
            }
            _context12.next = 18;
            break;

          case 14:
            _context12.prev = 14;
            _context12.t0 = _context12['catch'](1);

            debug(_context12.t0);
            ctx.throw(500, 'An error occurred downloading the gct file. It may not be available for this dataset.');

          case 18:
          case 'end':
            return _context12.stop();
        }
      }
    }, _callee12, undefined, [[1, 14]]);
  }));
  return function (_x10) {
    return ref.apply(this, arguments);
  };
}());

/**
 * Downloads the gctx file for the given dataset id
 * @param  {String} id The dataset id for which the gctx file will be downloaded.
 */
router.get('/:id/download/gctx', function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee13(ctx) {
    var dataset, filename, filePath;
    return _regenerator2.default.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            // Dataset files exist in /usr/src/dist/files/datasets/...
            // However, this folder is mounted from HDFS when the application is deployed.
            // This is done because the files can get very large. The files can be found at
            // http://elizabeth:50070/explorer.html#/apps/lincs/datasets
            if (process.env.NODE_ENV !== 'production') {
              ctx.throw(400, 'GCTX files can only be downloaded in production.');
            }
            _context13.prev = 1;
            _context13.next = 4;
            return _Dataset.Dataset.where('id', ctx.params.id).fetch();

          case 4:
            dataset = _context13.sent;

            dataset = dataset.toJSON();
            filename = dataset.lincsId + '-' + dataset.classification + '-' + dataset.method + '.gctx';
            filePath = '/usr/src/dist/files/datasets/' + dataset.lincsId + '.gctx';

            if (dataset.method === 'KINOMEScan') {
              // filename = `${dataset.classification}-KINOMEScan.gctx`;
              // filePath = '/usr/src/dist/files/datasets/KINOMEScan.gctx';
              ctx.throw(400, 'GCTX file is not currently available for KINOMEScan.');
            } else if (dataset.method === 'KiNativ') {
              // filename = `${dataset.classification}-KiNativ.gctx`;
              // filePath = '/usr/src/dist/files/datasets/KiNativ.gctx';
              ctx.throw(400, 'GCTX file is not currently available for KiNativ.');
            }
            ctx.set('Content-disposition', 'attachment; filename=' + filename);
            // Use koa-sendfile to send the file, given the path.
            _context13.next = 12;
            return (0, _koaSendfile2.default)(ctx, filePath);

          case 12:
            if (!ctx.status) {
              ctx.throw(400, 'An error occurred downloading the gctx file. It may not be available for this dataset.');
            }
            _context13.next = 19;
            break;

          case 15:
            _context13.prev = 15;
            _context13.t0 = _context13['catch'](1);

            debug(_context13.t0);
            ctx.throw(500, 'An error occurred downloading the gctx file. It may not be available for this dataset.');

          case 19:
          case 'end':
            return _context13.stop();
        }
      }
    }, _callee13, undefined, [[1, 15]]);
  }));
  return function (_x11) {
    return ref.apply(this, arguments);
  };
}());

/**
 * Downloads the dataset citation for the given dataset id
 * @param  {String} id The dataset id for which the citation will be downloaded.
 * @param  {String} refType The type of citation to download. Either ris, enw, or bib.
 */
router.get('/:id/reference/:refType', function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee14(ctx) {
    var dsModel, dataset, fileInfo;
    return _regenerator2.default.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.next = 2;
            return _Dataset.Dataset.where('id', ctx.params.id).fetch({ withRelated: ['center'] });

          case 2:
            dsModel = _context14.sent;
            dataset = dsModel.toJSON();
            fileInfo = void 0;

            if (!(ctx.params.refType === 'ris')) {
              _context14.next = 11;
              break;
            }

            _context14.next = 8;
            return generateRIS(dataset);

          case 8:
            fileInfo = _context14.sent;
            _context14.next = 21;
            break;

          case 11:
            if (!(ctx.params.refType === 'enw')) {
              _context14.next = 17;
              break;
            }

            _context14.next = 14;
            return generateENW(dataset);

          case 14:
            fileInfo = _context14.sent;
            _context14.next = 21;
            break;

          case 17:
            if (!(ctx.params.refType === 'bib')) {
              _context14.next = 21;
              break;
            }

            _context14.next = 20;
            return generateBIB(dataset);

          case 20:
            fileInfo = _context14.sent;

          case 21:
            ctx.set('Content-disposition', 'attachment; filename=' + fileInfo.filename);
            // Use koa-sendfile to send the file, given the path.
            _context14.next = 24;
            return (0, _koaSendfile2.default)(ctx, fileInfo.filePath);

          case 24:
            if (!ctx.status) {
              ctx.throw(500, 'An error occurred generating the ris file.');
            }
            _fs2.default.unlinkSync(fileInfo.filePath);

          case 26:
          case 'end':
            return _context14.stop();
        }
      }
    }, _callee14, undefined);
  }));
  return function (_x12) {
    return ref.apply(this, arguments);
  };
}());function generateRIS(ds) {
  return new _promise2.default(function (resolve) {
    var dateRetrieved = (0, _moment2.default)(ds.dateRetrieved);
    var filename = ds.method.replace(/\s/g, '_') + '-' + ds.lincsId + '.ris';
    var filePath = _path2.default.join(__dirname, '/', filename);
    var stream = _fs2.default.createWriteStream(filePath);
    stream.write('TY  - DATA\n');
    stream.write('AU  - ' + ds.center.name + '\n');
    stream.write('PY  - ' + dateRetrieved.format('YYYY') + '\n');
    stream.write('DA  - ' + dateRetrieved.format('YYYY/MM/DD') + '\n');
    if (ds.method && ds.method.length && ds.description && ds.description.length) {
      stream.write('TI  - ' + ds.method + '\n');
      stream.write('AB  - ' + ds.description + '\n');
    } else if (ds.description && ds.description.length) {
      stream.write('TI  - ' + ds.description + '\n');
    }
    stream.write('DP  - NIH LINCS Program\n');
    stream.write('KW  - ' + ds.lincsId + '\n');
    stream.write('UR  - ' + ds.sourceLink + '\n');
    stream.write('ER  - \n');
    stream.end();
    stream.on('finish', function () {
      return resolve({ filePath: filePath, filename: filename });
    });
  });
}

/**
 * Generates a dataset reference in the
 * {@link http://wiki.cns.iu.edu/pages/viewpage.action?pageId=1933370 ENW format}
 * @param  {Object} ds The dataset to reference
 * @return {Promise}   A promise that resolves with the filePath and filename of the
 * ENW file to be downloaded
 */
function generateENW(ds) {
  return new _promise2.default(function (resolve) {
    var dateRetrieved = (0, _moment2.default)(ds.dateRetrieved);
    var filename = ds.method.replace(/\s/g, '_') + '-' + ds.lincsId + '.enw';
    var filePath = _path2.default.join(__dirname, '/', filename);
    var stream = _fs2.default.createWriteStream(filePath);
    stream.write('%0 Dataset\n');
    stream.write('%A ' + ds.center.name + '\n');
    stream.write('%D ' + dateRetrieved.format('YYYY') + '\n');
    if (ds.method && ds.method.length) {
      stream.write('%T ' + ds.method + '\n');
    } else if (ds.description && ds.description.length) {
      stream.write('%T ' + ds.description + '\n');
    }
    stream.write('%M ' + ds.lincsId + '\n');
    stream.write('%U ' + ds.sourceLink + '\n');
    stream.end();
    stream.on('finish', function () {
      return resolve({ filePath: filePath, filename: filename });
    });
  });
}

/**
 * Generates a dataset reference in the {@link http://www.bibtex.org/Format/ BIBTEX format}
 * @param  {Object} ds The dataset to reference
 * @return {Promise}   A promise that resolves with the filePath and filename of the
 * BIBTEX file to be downloaded
 */
function generateBIB(ds) {
  return new _promise2.default(function (resolve) {
    var year = (0, _moment2.default)(ds.dateRetrieved).format('YYYY');
    var filename = ds.method.replace(/\s/g, '_') + '-' + ds.lincsId + '.bib';
    var filePath = _path2.default.join(__dirname, '/', filename);
    var stream = _fs2.default.createWriteStream(filePath);
    stream.write('@unpublished{' + ds.center.name.replace(/\s/g, '_') + year + ',\n');
    stream.write('author="' + ds.center.name + '",\n');
    stream.write('year="' + year + '",\n');
    if (ds.method && ds.method.length && ds.description && ds.description.length) {
      stream.write('title="' + ds.method + '"\n');
      stream.write('"' + ds.description + '"\n');
    } else if (ds.description && ds.description.length) {
      stream.write('title="' + ds.description + '"\n');
    }
    stream.write('url="' + ds.sourceLink + '"\n');
    stream.write('note="Unpublished dataset, LINCS ID: ' + ds.lincsId + '"\n');
    stream.write('}\n\n');
    stream.end();
    stream.on('finish', function () {
      return resolve({ filePath: filePath, filename: filename });
    });
  });
}

exports.default = router;