import mongoose, { Schema } from 'mongoose';

const pcSchema = new Schema({
  name: { type: String, required: true, index: { unique: true } },
  category: { type: String, required: true },
  sources: [String],
  assays: [String],
  providerName: String,
  providerCatalogId: String,
  donorAge: String,
  lincsId: String,
  entresId: String,
});

export default mongoose.model('PrimaryCell', pcSchema, 'primaryCells');
