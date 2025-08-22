const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// Serve static files from the dist directory
app.use(
  cors({
    origin: '*', // Adjust this to your needs
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
)
app.use(express.static(path.join(__dirname, 'dist')));

// Handle SPA routing - send index.html for all non-static routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});