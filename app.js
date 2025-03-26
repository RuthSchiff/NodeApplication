const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Importing the data from data.js
const applications = require('./data');

// Endpoint to get the list of installed applications
app.get('/', (req, res) => {
  return res.json(applications);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
