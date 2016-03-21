import mongoose, { Schema } from 'mongoose';

const foSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  keyDates: {
    release: Date,
    open: Date,
    due: Date,
    review: Date,
    announced: Date,
    start: Date,
  },
  keyLinks: Schema.Types.Mixed,
});

export default mongoose.model('FundingOpportunity', foSchema, 'fundingOpportunities');
