import lincsBookshelf from './base';

const model = lincsBookshelf.Model.extend({
  tableName: 'publications',
  compTools() {
    return this.belongsToMany('CompTool', 'comp_tools_publications');
  },
});
const coll = lincsBookshelf.Collection.extend({ model });

export const Publication = lincsBookshelf.model('Publication', model);
export const Publications = lincsBookshelf.collection('Publications', coll);
