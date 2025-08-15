const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware Setup
app.use(cors()); // Enable CORS for all requests
app.use(bodyParser.json()); // Parse JSON request bodies

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/sprint-retrospective-tool', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit process with failure in case of DB connection error
  });

// Root route
app.get('/', (req, res) => {
  try {
    res.send('Welcome to Sprint Retrospective Tool API');
  } catch (error) {
    console.error('Error handling request:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});