import lincsBookshelf from './base';

// Require file to ensure it's been loaded for relationship with Bookshelf
require('./Cell');
const model = lincsBookshelf.Model.extend({
  tableName: 'synonyms',
  // Relations
  cells() {
    return this.belongsTo('Cell');
  },
});

const coll = lincsBookshelf.Collection.extend({ model });

export const Synonym = lincsBookshelf.model('Synonym', model);
export const Synonyms = lincsBookshelf.collection('Synonyms', coll);
