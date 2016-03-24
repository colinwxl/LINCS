import lincsBookshelf from './base';

const model = lincsBookshelf.Model.extend({
  tableName: 'tissues',
  // Relations
  datasets() {
    this.belongsToMany('Dataset');
  },
});

const coll = lincsBookshelf.Collection.extend({ model });

export const Tissue = lincsBookshelf.model('Tissue', model);
export const Tissues = lincsBookshelf.collection('Tissues', coll);
