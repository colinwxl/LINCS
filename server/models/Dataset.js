import lincsBookshelf from './base';

const model = lincsBookshelf.Model.extend({
  tableName: 'datasets',
  // Relations
  cells: function() {
    this.belongsToMany('Cell', 'cells_datasets');
  },
  tissues: function() {
    this.belongsToMany('Tissue', 'tissues_datasets');
  },
  smallMolecules: function() {
    this.belongsToMany('SmallMolecule', 'small_molecules_datasets');
  },
  diseases: function() {
    this.belongsToMany('Disease', 'diseases_datasets');
  },
});

const coll = lincsBookshelf.Collection.extend({ model });

export const Dataset = lincsBookshelf.model('Dataset', model);
export const Datasets = lincsBookshelf.collection('Datasets', coll);
