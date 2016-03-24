import lincsBookshelf from './base';

const model = lincsBookshelf.Model.extend({
  tableName: 'small_molecules',
  // Relations
  datasets: function() {
    this.belongsToMany('Dataset');
  },
});

const coll = lincsBookshelf.Collection.extend({ model });

export const SmallMolecule = lincsBookshelf.model('SmallMolecule', model);
export const SmallMolecules = lincsBookshelf.collection('SmallMolecules', coll);
