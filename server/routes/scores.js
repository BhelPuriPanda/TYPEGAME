import express from 'express';
import score from '../models/score.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, wpm } = req.body;
  try {
    const newScore = new score({ name, wpm });
    await newScore.save();
    res.status(201).json(newScore);
  } catch (error) {
    res.status(500).json({ error: 'Error saving score' });
  }
});

router.get('/', async (req, res) => {
  try {
    const scores = await score.find().sort({ wpm: -1 }).limit(10);
    res.json(scores);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching scores' });
  }
});

export default router;