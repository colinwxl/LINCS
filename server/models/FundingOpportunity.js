import lincsBookshelf from './base';

const model = lincsBookshelf.Model.extend({
  tableName: 'funding_opportunities',
});

const coll = lincsBookshelf.Collection.extend({ model });

export const FundingOpportunity = lincsBookshelf.model('FundingOpportunity', model);
export const FundingOpportunities = lincsBookshelf.collection('FundingOpportunities', coll);
