import lincsBookshelf from './base';

const model = lincsBookshelf.Model.extend({ tableName: 'citations' });
export const Citations = lincsBookshelf.model('Citations', model);
