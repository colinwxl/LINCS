'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _nodemailer = require('nodemailer');

var _nodemailer2 = _interopRequireDefault(_nodemailer);

var _Tool = require('../models/Tool');

var _Workflow = require('../models/Workflow');

var _debug2 = require('debug');

var _debug3 = _interopRequireDefault(_debug2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = (0, _debug3.default)('app:server:routes:health'); /* eslint no-param-reassign:0 */


var router = new _koaRouter2.default({
  prefix: '/LINCS/api/v1'
});

/**
 * Fetch all tools. Order them by their `order` key. Load their center as well.
 */
router.get('/tools', function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx) {
    var tools;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Tool.Tools.query(function (qb) {
              return qb.select().orderBy('order', 'asc');
            }).fetch({ withRelated: ['center'] });

          case 3:
            tools = _context.sent;

            ctx.body = tools.toJSON({ omitPivot: true });
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](0);

            debug(_context.t0);
            ctx.throw(500, 'An error occurred obtaining tools.');

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 7]]);
  }));
  return function (_x) {
    return ref.apply(this, arguments);
  };
}());

/**
 * Fetch all workflows.
 */
router.get('/workflows', function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(ctx) {
    var workflows;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Workflow.Workflow.fetchAll();

          case 3:
            workflows = _context2.sent;

            ctx.body = workflows.toJSON();
            _context2.next = 11;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2['catch'](0);

            debug(_context2.t0);
            ctx.throw(500, 'An error occurred obtaining workflows.');

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
 * Send an email. This function essentially wraps a promise around the
 * {@link https://github.com/nodemailer/nodemailer#tldr-usage-example nodemailer API}.
 * @param  {nodemailerTransporter} transporter The transporter instance to use to send the
 * email. Created using
 * {@link https://github.com/nodemailer/nodemailer#transports nodemailer.createTransport()}
 * @param  {Object} opts nodemailer options
 * @return {[type]}             [description]
 */
function sendMail(transporter, opts) {
  return new _promise2.default(function (resolve, reject) {
    if (!transporter.sendMail) {
      reject('Transporter is invalid. Use nodemailer.createTransport()');
      return;
    }
    transporter.sendMail(opts, function (err) {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}

/**
 * Add a workflow to the database and email Sherry upon adding it.
 * @param  {Object} ctx.request.body The workflow to be added to the database.
 */
router.post('/workflows/add', function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(ctx) {
    var workflow, wf, transporter, mailOptions;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            workflow = ctx.request.body;

            if (!(0, _keys2.default)(workflow).length) {
              ctx.throw(400, 'Workflow not sent with request.');
            }
            if (!workflow.type) {
              ctx.throw(400, 'Workflow requires a type');
            }
            _context3.prev = 3;
            _context3.next = 6;
            return _Workflow.Workflow.forge(workflow).save().then(function (wfModel) {
              return wfModel.toJSON();
            });

          case 6:
            wf = _context3.sent;
            transporter = _nodemailer2.default.createTransport('smtps://maayanlabapps%40gmail.com:systemsbiology@smtp.gmail.com');
            mailOptions = {
              from: 'LINCS@amp.pharm.mssm.edu',
              to: 'sherry.jenkins@mssm.edu',
              subject: 'A new workflow has been submitted',
              text: 'Hello,\n\n' + 'This is a notification from http://amp.pharm.mssm.edu/LINCS that a ' + 'new workflow has been submitted.\n\n' + ('' + (wf.email ? 'The submitter\'s email address is ' + wf.email + '.\n' : '')) + ('He/she is ' + (wf.type === 'experimentalist' ? 'an experimentalist.' : 'a computational biologist.') + '\nTheir question/aim is ' + wf.question + '.')
            };
            _context3.next = 11;
            return sendMail(transporter, mailOptions);

          case 11:
            ctx.body = wf;
            _context3.next = 18;
            break;

          case 14:
            _context3.prev = 14;
            _context3.t0 = _context3['catch'](3);

            debug(_context3.t0);
            ctx.throw(500, 'An error occurred adding workflow.');

          case 18:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined, [[3, 14]]);
  }));
  return function (_x3) {
    return ref.apply(this, arguments);
  };
}());

exports.default = router;