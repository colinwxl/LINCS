import lincsBookshelf from './base';

const model = lincsBookshelf.Model.extend({ tableName: 'webinars' });
const coll = lincsBookshelf.Collection.extend({ model });

export const Webinar = lincsBookshelf.model('Webinar', model);
export const Webinars = lincsBookshelf.collection('Webinars', coll);
