import lincsBookshelf from './base';

const model = lincsBookshelf.Model.extend({ tableName: 'news' });
export const News = lincsBookshelf.model('News', model);
