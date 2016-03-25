'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FundingOpportunities = exports.FundingOpportunity = undefined;

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var model = _base2.default.Model.extend({
  tableName: 'funding_opportunities'
});

var coll = _base2.default.Collection.extend({ model: model });

var FundingOpportunity = exports.FundingOpportunity = _base2.default.model('FundingOpportunity', model);
var FundingOpportunities = exports.FundingOpportunities = _base2.default.collection('FundingOpportunities', coll);