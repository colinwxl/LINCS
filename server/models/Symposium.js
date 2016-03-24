import lincsBookshelf from './base';

const model = lincsBookshelf.Model.extend({ tableName: 'symposia' });
const coll = lincsBookshelf.Collection.extend({ model });

export const Symposium = lincsBookshelf.model('Symposium', model);
export const Symposia = lincsBookshelf.collection('Symposia', coll);
