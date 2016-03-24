import lincsBookshelf from './base';

const model = lincsBookshelf.Model.extend({
  tableName: 'cells',
  // Relations
  datasets() {
    this.belongsToMany('Dataset');
  },
});

const coll = lincsBookshelf.Collection.extend({ model });

export const Cell = lincsBookshelf.model('Cell', model);
export const Cells = lincsBookshelf.collection('Cells', coll);
