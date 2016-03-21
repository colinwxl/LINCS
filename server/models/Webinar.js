import mongoose, { Schema } from 'mongoose';

const webinarSchema = new Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  presenter: {
    name: String,
    affiliation: String,
    url: String,
  },
});

export default mongoose.model('Webinar', webinarSchema, 'webinars');
