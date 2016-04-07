import lincsBookshelf from './base';

require('./Publication');
const model = lincsBookshelf.Model.extend({
  tableName: 'tools',
  publications() {
    return this.belongsToMany('Publication', 'tools_publications');
  },
});
const coll = lincsBookshelf.Collection.extend({ model });

export const Tool = lincsBookshelf.model('Tool', model);
export const Tools = lincsBookshelf.collection('Tools', coll);
