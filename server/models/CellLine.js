import mongoose, { Schema } from 'mongoose';

const clSchema = new Schema({
  name: { type: String, required: true, index: { unique: true } },
  category: { type: String, required: true },
  sources: [String],
  assays: [String],
  providerCatalogId: String,
  centerSpecificId: String,
});

export default mongoose.model('CellLine', clSchema, 'cellLines');
