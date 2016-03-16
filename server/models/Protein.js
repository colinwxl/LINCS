import mongoose, { Schema } from 'mongoose';

const proteinSchema = new Schema({
  name: { type: String, required: true, index: { unique: true } },
  category: { type: String, required: true },
  lincsId: String,
  hingeI1: String,
  uniprotId: String,
  proteinSpecies: String,
  mutation: String,
  hingeI3: String,
  assays: [String],
  geneSymbol: String,
  geneId: String,
  gateKeeper: String,
  kinaseFamily: String,
  kinaseGroup: String,
  kinaseDomain: String,
  sources: [String],
});

export default mongoose.model('Protein', proteinSchema, 'proteins');
