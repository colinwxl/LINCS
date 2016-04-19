import lincsBookshelf from './base';

require('./Publication');
const model = lincsBookshelf.Model.extend({
  tableName: 'workflows',
});
const coll = lincsBookshelf.Collection.extend({ model });

export const Workflow = lincsBookshelf.model('Workflow', model);
export const Workflows = lincsBookshelf.collection('Workflows', coll);
