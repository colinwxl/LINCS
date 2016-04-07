import lincsBookshelf from './base';

require('./Author');
require('./Tool');
const model = lincsBookshelf.Model.extend({
  tableName: 'publications',
  authors() {
    return this.belongsToMany('Author', 'authors_publications');
  },
  compTools() {
    return this.belongsToMany('Tool', 'tools_publications');
  },
});
const coll = lincsBookshelf.Collection.extend({ model });

export const Publication = lincsBookshelf.model('Publication', model);
export const Publications = lincsBookshelf.collection('Publications', coll);
