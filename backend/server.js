const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let feedbacks = []; // stores feedback in memory

// GET all feedback
app.get('/feedback', (req, res) => {
  res.json(feedbacks);
});

// POST new feedback
app.post('/feedback', (req, res) => {
  const { text } = req.body;
  if (text && text.trim() !== "") {
    feedbacks.push(text);
    res.json({ message: "Feedback added successfully!" });
  } else {
    res.status(400).json({ message: "Feedback cannot be empty" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
