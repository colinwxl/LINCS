import lincsBookshelf from './base';

const model = lincsBookshelf.Model.extend({ tableName: 'workshops' });
const coll = lincsBookshelf.Collection.extend({ model });

export const Workshop = lincsBookshelf.model('Workshop', model);
export const Workshops = lincsBookshelf.collection('Workshops', coll);
