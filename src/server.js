// Import Modules
const express = require('express');
const api = require('./routes/api');
const main = require('./app/main');

const PORT = process.env.PORT || 3000;
const app = express();

app
    .use(express.urlencoded({ extended: false }))
    .use(express.json())
    .use('/api', api) // Send /api requests to api.js to handle

    // Default response for any other request (Not Found)
    .use((req, res) => {
        res.status(404).end();
    })

    // Launch server locally on port 3000
    .listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
        main.start(); // Start application
    });