const db = require('../utilities/connect_db'); // Import connect_db.js
const fs = require('fs');
const path = require('path');
const app = require('express').Router();

// View all employees
app.get('/employees', (req, res) => {
    const queryFilePath = path.join(__dirname, '../db/queries/viewAllEmployees_query.sql');
    const query = fs.readFileSync(queryFilePath, 'utf8');

    db.query(query, (error, results) => {
        if (error) {
            console.error('An error occurred:', error);
        } else {
            console.log('\n');
            console.table(results);
        }
        db.end();
    });
});

module.exports = app;