import lincsBookshelf from './base';

const model = lincsBookshelf.Model.extend({ tableName: 'canned_analyses' });
export const CannedAnalyses = lincsBookshelf.model('CannedAnalyses', model);
