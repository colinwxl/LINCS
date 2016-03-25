import lincsBookshelf from './base';

// Require file to ensure it's been loaded for relationship with Bookshelf
require('./Dataset');
const model = lincsBookshelf.Model.extend({
  tableName: 'cells',
  // Relations
  datasets() {
    return this.belongsToMany('Dataset');
  },
});

const coll = lincsBookshelf.Collection.extend({ model });

export const Cell = lincsBookshelf.model('Cell', model);
export const Cells = lincsBookshelf.collection('Cells', coll);
