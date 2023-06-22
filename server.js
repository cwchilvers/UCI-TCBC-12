const express = require('express'); // Import express
const mysql = require('mysql2');    // Import mysql2

const PORT = process.env.PORT || 3000;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to SQL database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
    );

// View all employees
app.get('/api/employees', (req, res) => {
    const sql = `SELECT * FROM employee`;
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});




let logo = `
==================================================
 _____                 _                       
| ____|_ __ ___  _ __ | | ___  _   _  ___  ___ 
|  _| | '_ \` _ \\| '_ \\| |/ _ \\| | | |/ _ \\/ _ \\
| |___| | | | | | |_) | | (_) | |_| |  __/  __/
|_____|_| |_| |_| .__/|_|\\___/ \\__, |\\___|\\___|
|_   _| __ __ _ |_|_| | _____ _|___/           
  | || '__/ _\` |/ __| |/ / _ \\ '__|            
  | || | | (_| | (__|   <  __/ |               
  |_||_|  \\__,_|\\___|_|\\_\\___|_|   
  
==================================================
`






// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});