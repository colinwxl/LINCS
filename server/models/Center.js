import lincsBookshelf from './base';

// Require file to ensure it's been loaded for relationship with Bookshelf
require('./Dataset');
require('./Tool');
const model = lincsBookshelf.Model.extend({
  tableName: 'centers',
  // Relations
  datasets() {
    return this.hasMany('Dataset');
  },
  tools() {
    return this.belongsToMany('Tool', 'center_tools');
  },
});

const coll = lincsBookshelf.Collection.extend({ model });

export const Center = lincsBookshelf.model('Center', model);
export const Centers = lincsBookshelf.collection('Centers', coll);
