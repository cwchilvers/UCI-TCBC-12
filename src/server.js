// Import required modules
const express = require('express');
const api = require('./routes/api');
const main = require('./app/main');

require('dotenv').config();

// Set the port to listen on
const PORT = process.env.PORT || 3000;

// Create an Express app instance
const app = express();

// Middleware setup
app
    .use(express.urlencoded({ extended: false }), express.json())
    .use('/api', api)
    .use((req, res) => res.status(404).end());

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    main.start();
});
