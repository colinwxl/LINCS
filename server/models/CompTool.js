import lincsBookshelf from './base';

const model = lincsBookshelf.Model.extend({
  tableName: 'comp_tools',
  publications() {
    return this.belongsToMany('Publication', 'comp_tools_publications');
  },
});
const coll = lincsBookshelf.Collection.extend({ model });

export const CompTool = lincsBookshelf.model('CompTool', model);
export const CompTools = lincsBookshelf.collection('CompTools', coll);
