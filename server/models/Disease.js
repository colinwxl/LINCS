import lincsBookshelf from './base';

const model = lincsBookshelf.Model.extend({
  tableName: 'diseases',
  // Relations
  datasets() {
    this.belongsToMany('Dataset');
  },
});

const coll = lincsBookshelf.Collection.extend({ model });

export const Disease = lincsBookshelf.model('Disease', model);
export const Diseases = lincsBookshelf.collection('Diseases', coll);
