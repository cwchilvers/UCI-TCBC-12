module.exports = () => {
    const main = require('../app/main'); // Import mainMenu.js

    fetch('http://localhost:3000/api/employees', {
        method: 'GET',
    })
    .then(response => {
        main.mainMenu(); // Call the mainMenu function to return to the main menu
    })
    .catch(error => {
        console.error('An error occurred:', error);
        main.mainMenu(); // Call the mainMenu function to return to the main menu
    });
};
