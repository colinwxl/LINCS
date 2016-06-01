'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _koaSendfile = require('koa-sendfile');

var _koaSendfile2 = _interopRequireDefault(_koaSendfile);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _Publication = require('../models/Publication');

var _debug2 = require('debug');

var _debug3 = _interopRequireDefault(_debug2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint no-param-reassign:0 */

var debug = (0, _debug3.default)('app:server:routes:pubsNews');

var router = new _koaRouter2.default({
  prefix: '/LINCS/api/v1'
});

/**
 * Fetch all publications. Order them by their year_published and PubMed Id (pm_id).
 * Include the authors of the publications.
 */
router.get('/publications', function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx) {
    var pubs, includePivot;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Publication.Publication.query(function (qb) {
              return qb.select().orderByRaw('year_published DESC, pm_id DESC');
            }).fetchAll({ withRelated: ['authors'] });

          case 3:
            pubs = _context.sent;

            // Omit pivot by default
            includePivot = !!ctx.query.includePivot;

            ctx.body = pubs.toJSON({ omitPivot: !includePivot });
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context['catch'](0);

            debug(_context.t0);
            ctx.throw(500, 'An error occurred obtaining datasets.');

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 8]]);
  }));
  return function (_x) {
    return ref.apply(this, arguments);
  };
}());

/**
 * Generates a publication reference in the
 * {@link http://refman.com/sites/rm/files/m/direct_export_ris.pdf RIS format}
 * @param  {Object} pub The publication to reference
 * @return {Promise}   A promise that resolves with the filePath and filename of the
 * RIS file to be downloaded
 */
function generateRIS(pub) {
  return new _promise2.default(function (resolve) {
    var firstAuthorLastName = pub.authors[0].name.split(' ')[0];
    var id = '' + firstAuthorLastName + pub.yearPublished;
    var filename = id + '.ris';
    if (!!pub.pmId) {
      filename = id + '-' + pub.pmId + '.ris';
    } else if (!!pub.pmcId) {
      filename = id + '-' + pub.pmcId + '.ris';
    } else if (!!pub.doi) {
      filename = id + '-' + encodeURIComponent(pub.doi) + '.ris';
    }
    var filePath = _path2.default.join(__dirname, '/', filename);
    var stream = _fs2.default.createWriteStream(filePath);
    stream.write('TY  - JOUR\n');
    pub.authors.forEach(function (author) {
      return stream.write('AU  - ' + author.name + '\n');
    });
    stream.write('PY  - ' + pub.yearPublished + '\n');
    stream.write('DA  - ' + pub.yearPublished + '//\n');
    stream.write('TI  - ' + pub.articleName + '\n');
    stream.write('T2  - ' + pub.journalName + '\n');
    if (!!pub.ppPages) {
      if (pub.ppPages.toString().indexOf('-') !== -1) {
        stream.write('SP  - ' + pub.ppPages.split('-')[0] + '\n');
        stream.write('EP  - ' + pub.ppPages.split('-')[1] + '\n');
      } else {
        stream.write('SP  - ' + pub.ppPages + '\n');
        stream.write('EP  - ' + pub.ppPages + '\n');
      }
    }
    stream.write('VL  - ' + pub.volume + '\n');
    if (!!pub.issue) {
      stream.write('IS  - ' + pub.issue + '\n');
    }
    stream.write('AB  - ' + pub.abstract + '\n');
    if (!!pub.doi) {
      stream.write('DO  - ' + pub.doi + '\n');
    }
    stream.write('ID  - ' + id + '\n');
    stream.write('ER  - \n');
    stream.end();
    stream.on('finish', function () {
      return resolve({ filePath: filePath, filename: filename });
    });
  });
}

/**
 * Generates a publication reference in the
 * {@link http://wiki.cns.iu.edu/pages/viewpage.action?pageId=1933370 ENW format}
 * @param  {Object} pub The publication to reference
 * @return {Promise}   A promise that resolves with the filePath and filename of the
 * ENW file to be downloaded
 */
function generateENW(pub) {
  return new _promise2.default(function (resolve) {
    var firstAuthorLastName = pub.authors[0].name.split(' ')[0];
    var id = '' + firstAuthorLastName + pub.yearPublished;
    var filename = id + '.enw';
    if (!!pub.pmId) {
      filename = id + '-' + pub.pmId + '.enw';
    } else if (!!pub.pmcId) {
      filename = id + '-' + pub.pmcId + '.enw';
    } else if (!!pub.doi) {
      filename = id + '-' + encodeURIComponent(pub.doi) + '.enw';
    }
    var filePath = _path2.default.join(__dirname, '/', filename);
    var stream = _fs2.default.createWriteStream(filePath);
    stream.write('%0 Journal Article\n');
    stream.write('%T ' + pub.articleName + '\n');
    pub.authors.forEach(function (author) {
      return stream.write('%A ' + author.name + '\n');
    });
    stream.write('%J ' + pub.journalName + '\n');
    stream.write('%D ' + pub.yearPublished + '\n');
    stream.write('%V ' + pub.volume + '\n');
    if (!!pub.issue) {
      stream.write('%N ' + pub.issue + '\n');
    }
    stream.write('%F ' + id + '\n');
    stream.write('%X ' + pub.abstract + '\n');
    stream.write('%9 journal article\n');
    if (!!pub.doi) {
      stream.write('%R ' + pub.doi + '\n');
      stream.write('%U http://dx.doi.org/' + pub.doi + '\n');
    } else if (!!pub.pmId) {
      stream.write('%U http://www.ncbi.nlm.nih.gov/pubmed/' + pub.pmId + '\n');
    } else if (!!pub.pmcId) {
      stream.write('%U http://www.ncbi.nlm.nih.gov/pmc/articles/' + pub.pmcId + '\n');
    } else if (!!pub.otherLink) {
      stream.write('%U ' + pub.otherLink + '\n');
    }
    if (!!pub.ppPages) {
      stream.write('%P ' + pub.ppPages + '\n');
    }
    stream.end();
    stream.on('finish', function () {
      return resolve({ filePath: filePath, filename: filename });
    });
  });
}

/**
 * Generates a publication reference in the {@link http://www.bibtex.org/Format/ BIBTEX format}
 * @param  {Object} pub The publication to reference
 * @return {Promise}   A promise that resolves with the filePath and filename of the
 * BIBTEX file to be downloaded
 */
function generateBIB(pub) {
  return new _promise2.default(function (resolve) {
    var firstAuthorLastName = pub.authors[0].name.split(' ')[0];
    var id = '' + firstAuthorLastName + pub.yearPublished;
    var filename = id + '.bib';
    if (!!pub.pmId) {
      filename = id + '-' + pub.pmId + '.bib';
    } else if (!!pub.pmcId) {
      filename = id + '-' + pub.pmcId + '.bib';
    } else if (!!pub.doi) {
      filename = id + '-' + encodeURIComponent(pub.doi) + '.bib';
    }
    var filePath = _path2.default.join(__dirname, '/', filename);
    var stream = _fs2.default.createWriteStream(filePath);
    stream.write('@Article{' + id + '\n');
    stream.write('author="' + pub.authors.map(function (a) {
      return a.name;
    }).join(' and ') + '",\n');
    stream.write('title="' + pub.articleName + '",\n');
    stream.write('journal="' + pub.journalName + '",\n');
    stream.write('year="' + pub.yearPublished + '",\n');
    stream.write('volume="' + pub.volume + '",\n');
    if (!!pub.issue) {
      stream.write('number="' + pub.issue + '",\n');
    }
    if (!!pub.ppPages) {
      stream.write('pages="' + pub.ppPages + '",\n');
    }
    stream.write('abstract="' + pub.abstract + '",\n');
    if (!!pub.doi) {
      stream.write('doi="' + pub.doi + '",\n');
    }
    if (!!pub.doi) {
      stream.write('url="http://dx.doi.org/' + pub.doi + '"\n');
    } else if (!!pub.pmId) {
      stream.write('url="http://www.ncbi.nlm.nih.gov/pubmed/' + pub.pmId + '"\n');
    } else if (!!pub.pmcId) {
      stream.write('url="http://www.ncbi.nlm.nih.gov/pmc/articles/' + pub.pmcId + '"\n');
    } else if (!!pub.otherLink) {
      stream.write('url="' + pub.otherLink + '"\n');
    } else {
      stream.write('url=""\n');
    }
    stream.write('}');
    stream.end();
    stream.on('finish', function () {
      return resolve({ filePath: filePath, filename: filename });
    });
  });
}

/**
 * Downloads the publication citation for the given publication id
 * @param  {String} id The publication id for which the citation will be downloaded.
 * @param  {String} refType The type of citation to download. Either ris, enw, or bib.
 */
router.get('/publications/:id/reference/:refType', function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(ctx) {
    var pubModel, publication, fileInfo;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Publication.Publication.where('id', ctx.params.id).fetch({ withRelated: ['authors'] });

          case 2:
            pubModel = _context2.sent;
            publication = pubModel.toJSON();
            fileInfo = void 0;

            if (!(ctx.params.refType === 'ris')) {
              _context2.next = 11;
              break;
            }

            _context2.next = 8;
            return generateRIS(publication);

          case 8:
            fileInfo = _context2.sent;
            _context2.next = 21;
            break;

          case 11:
            if (!(ctx.params.refType === 'enw')) {
              _context2.next = 17;
              break;
            }

            _context2.next = 14;
            return generateENW(publication);

          case 14:
            fileInfo = _context2.sent;
            _context2.next = 21;
            break;

          case 17:
            if (!(ctx.params.refType === 'bib')) {
              _context2.next = 21;
              break;
            }

            _context2.next = 20;
            return generateBIB(publication);

          case 20:
            fileInfo = _context2.sent;

          case 21:
            ctx.set('Content-disposition', 'attachment; filename=' + fileInfo.filename);
            _context2.next = 24;
            return (0, _koaSendfile2.default)(ctx, fileInfo.filePath);

          case 24:
            if (!ctx.status) {
              ctx.throw(500, 'An error occurred generating the ris file.');
            }
            _fs2.default.unlinkSync(fileInfo.filePath);

          case 26:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));
  return function (_x2) {
    return ref.apply(this, arguments);
  };
}());

// News need to exist in database first
router.get('/news', function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(ctx) {
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            ctx.body = [];

          case 1:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));
  return function (_x3) {
    return ref.apply(this, arguments);
  };
}());

exports.default = router;