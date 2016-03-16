import mongoose, { Schema } from 'mongoose';

const smSchema = new Schema({
  name: { type: String, required: true, index: { unique: true } },
  pubChemCId: String,
  category: String,
  lincsId: String,
  alternateNames: [String],
  centerCompoundIds: [String],
  smilesParent: String,
  assays: [String],
  smilesBatches: [String],
  molecularMass: [String],
  centerSampleIds: [String],
  inChiParents: [String],
  sources: [String],
});

export default mongoose.model('SmallMolecule', smSchema, 'smallMolecules');
