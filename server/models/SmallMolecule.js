import lincsBookshelf from './base';

// Require file to ensure it's been loaded for relationship with Bookshelf
require('./Dataset');
const model = lincsBookshelf.Model.extend({
  tableName: 'small_molecules',
  // Relations
  datasets() {
    return this.belongsToMany('Dataset');
  },
});

const coll = lincsBookshelf.Collection.extend({ model });

export const SmallMolecule = lincsBookshelf.model('SmallMolecule', model);
export const SmallMolecules = lincsBookshelf.collection('SmallMolecules', coll);
