import lincsBookshelf from './base';

const model = lincsBookshelf.Model.extend({ tableName: 'challenges' });
const coll = lincsBookshelf.Collection.extend({ model });

export const Challenge = lincsBookshelf.model('Challenge', model);
export const Challenges = lincsBookshelf.collection('Challenges', coll);
