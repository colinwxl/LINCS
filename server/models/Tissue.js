import lincsBookshelf from './base';

// Require file to ensure it's been loaded for relationship with Bookshelf
require('./Dataset');
const model = lincsBookshelf.Model.extend({
  tableName: 'tissues',
  // Relations
  datasets() {
    return this.belongsToMany('Dataset');
  },
});

const coll = lincsBookshelf.Collection.extend({ model });

export const Tissue = lincsBookshelf.model('Tissue', model);
export const Tissues = lincsBookshelf.collection('Tissues', coll);
