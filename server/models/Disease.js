import lincsBookshelf from './base';

// Require file to ensure it's been loaded for relationship with Bookshelf
require('./Cell');
const model = lincsBookshelf.Model.extend({
  tableName: 'diseases',
  // Relations
  cells() {
    return this.belongsToMany('Cell', 'cells_diseases');
  },
});

const coll = lincsBookshelf.Collection.extend({ model });

export const Disease = lincsBookshelf.model('Disease', model);
export const Diseases = lincsBookshelf.collection('Diseases', coll);
