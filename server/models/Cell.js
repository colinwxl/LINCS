import lincsBookshelf from './base';

// Require file to ensure it's been loaded for relationship with Bookshelf
require('./Dataset');
require('./Tissue');
require('./Disease');
require('./Synonym');
const model = lincsBookshelf.Model.extend({
  tableName: 'cells',
  // Relations
  datasets() {
    return this.belongsToMany('Dataset', 'cells_datasets');
  },
  tissues() {
    return this.belongsToMany('Tissue', 'cells_tissues');
  },
  diseases() {
    return this.belongsToMany('Disease', 'cells_diseases');
  },
  synonyms() {
    return this.hasMany('Synonym');
  },
});

const coll = lincsBookshelf.Collection.extend({ model });

export const Cell = lincsBookshelf.model('Cell', model);
export const Cells = lincsBookshelf.collection('Cells', coll);
