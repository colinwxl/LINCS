import lincsBookshelf from './base';

const model = lincsBookshelf.Model.extend({ tableName: 'announcements' });
export const Announcements = lincsBookshelf.model('Announcements', model);
