const logo = require("../components/logo");                             // Import logo.js
const mainMenu_inquirer = require("../utilities/inquirer/mainMenu");    // Import inquirer.js
const pause = require("../utilities/inquirer/pause");                   // Import inquirer.js

const start = async () => {
    logo();             // Display logo
    await mainMenu();   // Display main menu
}

const mainMenu = async () => {
    const data = await mainMenu_inquirer();

    // Switch statement to handle user selection
    switch (data.mainMenu) {
        case 'View All Employees':
            fetch('http://localhost:3000/api/employees', {
                method: 'GET',
            })
                .then((response) => {
                    return pause(); // Pause
                })
                .then(() => {
                    mainMenu(); // Return to the main menu
                })
            break;

        case 'Add Employee':
            fetch('http://localhost:3000/api/employees', {
                method: 'POST',
            })
                .then((response) => {
                    return pause(); // Pause
                })
                .then(() => {
                    mainMenu(); // Return to the main menu
                })
            break;

        case 'Update Employee Role':
            //
            break;

        case 'View All Roles':
            //
            break;

        case 'Add Role':
            //
            break;

        case 'View All Departments':
            //
            break;

        case 'Add Department':
            //
            break;

        case 'Quit':
            //
            break;
    }
}

module.exports = {
    start,
    mainMenu
}