module.exports = (req, res) => {
    const db = require('../../config/db_connect'); 
    const fs = require('fs');      
    const path = require('path');  
    const table3 = require('cli-table3'); 

    const queryFilePath = path.join(__dirname, '../../db/queries/viewRoles_query.sql');
    const query = fs.readFileSync(queryFilePath, 'utf8');

    db.query(query, (error, results) => {
        if (error) {
            console.error('Failed to retrieve roles.', error);
            res.status(500).json({ error: 'Failed to retrieve roles.' }); 
        } else {
            const table = new table3({                             
                head: ['ID', 'Title', 'Salary', 'Department'],    
                colWidths: [5, 25, 15, 25],                
            });

            results.forEach(({ id, title, salary, department }) => {  
                table.push([id, title, salary, department]); 
            });

            console.log('\n'); 
            console.log(table.toString());
            res.status(200).json({ message: 'Roles retrieved successfully.', results });
        }
    });
};