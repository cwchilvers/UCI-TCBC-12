// Import Modules
const express = require('express');             // Import express
const api = require('./src/routes/api');        // Import routes.js
const logo = require("./lib/logo");             // Import logo.js
const main = require("./src/main");            // Import main.js

const PORT = process.env.PORT || 3000;
const app = express();

app
    .use(express.urlencoded({ extended: false }))
    .use(express.json())
    .use('/api', api)   // Send /api requests to api.js to handle

    // Default response for any other request (Not Found)           
    .use((req, res) => {        
        res.status(404).end();
    })

    // Launch server locally on port 3000
    .listen(PORT, () => {       
        console.log(`Server running on port ${PORT}`);
        logo();             // Displays logo
        main.mainMenu();    // Starts app
    });