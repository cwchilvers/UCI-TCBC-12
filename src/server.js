// Import Modules
const express = require('express');
const api = require('./routes/api');
const main = require('./app/main');

const PORT = process.env.PORT || 3000;  // Set port for server
const app = express();

app
    // Encode and parse incoming requests as JSON
    .use(express.urlencoded({ extended: false }), express.json())

    // Route api requests to api router
    .use('/api', api)

    // Send 404 for any other requests
    .use((req, res) => res.status(404).end())  

    // Start server
    .listen(PORT, () => {                                                       
        console.log(`Server running on port ${PORT}`);
        main.start();
    });