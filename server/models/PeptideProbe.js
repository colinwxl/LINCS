import mongoose, { Schema } from 'mongoose';
// import _debug from 'debug';
// const debug = _debug('app:server:models:PeptideProbe');

const peptideSchema = new Schema({
  name: { type: String, required: true, index: { unique: true } },
  category: { type: String, required: true },
  sources: [String],
  assays: [String],
  reprogrammingMethod: String,
});

const PeptideProbe = mongoose.model('PeptideProbe', peptideSchema, 'peptideProbes');

export default PeptideProbe;
