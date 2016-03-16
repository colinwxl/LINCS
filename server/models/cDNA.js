import mongoose, { Schema } from 'mongoose';

const cDNASchema = new Schema({
  name: { type: String, required: true, index: { unique: true } },
  source: String,
  sources: [String],
  assays: [String],
  category: String,
  lincsId: String,
});

export default mongoose.model('cDNA', cDNASchema, 'cDNA');
