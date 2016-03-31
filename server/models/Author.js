import lincsBookshelf from './base';

require('./Publication');
const model = lincsBookshelf.Model.extend({
  tableName: 'authors',
  publications() {
    return this.belongsToMany('Publication', 'authors_publications');
  },
});
const coll = lincsBookshelf.Collection.extend({ model });

export const Author = lincsBookshelf.model('Author', model);
export const Authors = lincsBookshelf.collection('Authors', coll);
