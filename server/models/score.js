import mongoose from 'mongoose';

const scoreSchema = new mongoose.Schema({
  name: String,
  wpm: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const score = mongoose.model('score', scoreSchema);
export default score;