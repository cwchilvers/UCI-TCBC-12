module.exports = () => {
    const main = require('../app/main'); // Import mainMenu.js
    const pause = require('../utilities/inquirer'); // Import the pause function from inquirer.js

    fetch('http://localhost:3000/api/employees', {
        method: 'GET',
    })
        .then(response => {
            return pause.pause(); // Pause
        })
        .then(() => {
            main.mainMenu(); // Return to the main menu
        })
        .catch(error => {
            console.error('An error occurred:', error); // Log error to console
            main.mainMenu(); // Return to the main menu
        });
};