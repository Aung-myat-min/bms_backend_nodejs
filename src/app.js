import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json()); // Enable JSON parsing for all routes
app.use(cors()); // Enable CORS for all routes

app.use('/', (req, res) => {
  res.send('Bank Management System API!');
});

export default app;
