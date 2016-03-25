import lincsBookshelf from './base';

// Require file to ensure it's been loaded for relationship with Bookshelf
require('./Dataset');
const model = lincsBookshelf.Model.extend({
  tableName: 'diseases',
  // Relations
  datasets() {
    return this.belongsToMany('Dataset');
  },
});

const coll = lincsBookshelf.Collection.extend({ model });

export const Disease = lincsBookshelf.model('Disease', model);
export const Diseases = lincsBookshelf.collection('Diseases', coll);
