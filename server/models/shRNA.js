import mongoose, { Schema } from 'mongoose';

const shRNASchema = new Schema({
  name: { type: String, required: true, index: { unique: true } },
  sources: [String],
  assays: [String],
  category: String,
  targetSequence: String,
  lincsId: String,
  seed6MerSeq: String,
  sourceId: String,
  seed7MerSeq: String,
});

export default mongoose.model('shRNA', shRNASchema, 'shRNA');
