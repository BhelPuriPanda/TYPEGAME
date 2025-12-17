import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import scoreRoutes from './routes/scores.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/',(req,res) => {
    res.send("Server is running");
})

const port = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection failed:', err));

app.use('/api/scores', scoreRoutes);

app.listen(port, () => {
    console.log(`Server is listening at ${port}`);
})