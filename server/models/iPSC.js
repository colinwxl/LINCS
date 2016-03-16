import mongoose, { Schema } from 'mongoose';
// import _debug from 'debug';
// const debug = _debug('app:server:models:iPSC');

const iPSCSchema = new Schema({
  name: { type: String, required: true, index: { unique: true } },
  category: { type: String, required: true },
  sources: [String],
  assays: [String],
  reprogrammingMethod: String,
  lincsId: String,
});

const iPSC = mongoose.model('iPSC', iPSCSchema, 'iPSCs');

export default iPSC;
