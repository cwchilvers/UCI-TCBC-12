module.exports = (req, res) => {
    const db = require('../utilities/db_utilities/db_connect');  // Import connect_db.js (connect to database)
    const fs = require('fs');               // Import fs module (to read files)
    const path = require('path');  
    const table3 = require('cli-table3');   // Using cli-table3 because console.table() includes
                                            // a column for index that cannot be removed

    const queryFilePath = path.join(__dirname, '../db/queries/viewRoles_query.sql');
    const query = fs.readFileSync(queryFilePath, 'utf8');

    db.query(query, (error, results) => {
        if (error) {
            console.error('An error occurred:', error);                 // Log error to console
            res.status(500).json({ error: 'An error occurred' });       // Server error
        } else {
            const table = new table3({                                  // Create table
                head: ['ID', 'Title', 'Salary', 'Department'],          // Column names
                colWidths: [5, 25, 15, 25],                             // Column widths
            });

            results.forEach(({ id, title, salary, department }) => {    // For each object in results array
                table.push([id, title, salary, department]);            // Push values to table
            });

            console.log('\n'); 
            console.log(table.toString());  // Displays the table in the console
            res.status(200).json(results);  // Send results
        }
    });
};