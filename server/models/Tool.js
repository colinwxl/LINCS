import lincsBookshelf from './base';

require('./Center');
require('./Publication');
const model = lincsBookshelf.Model.extend({
  tableName: 'tools',
  centers() {
    return this.belongsToMany('Center', 'centers_tools');
  },
  publications() {
    return this.belongsToMany('Publication', 'tools_publications');
  },
});
const coll = lincsBookshelf.Collection.extend({ model });

export const Tool = lincsBookshelf.model('Tool', model);
export const Tools = lincsBookshelf.collection('Tools', coll);
