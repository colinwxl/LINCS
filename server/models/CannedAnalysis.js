import lincsBookshelf from './base';

const model = lincsBookshelf.Model.extend({ tableName: 'canned_analyses' });

const coll = lincsBookshelf.Collection.extend({ model });

export const CannedAnalysis = lincsBookshelf.model('CannedAnalysis', model);
export const CannedAnalyses = lincsBookshelf.collection('CannedAnalyses', coll);
