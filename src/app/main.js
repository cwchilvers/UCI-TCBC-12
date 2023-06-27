const inquirer = require("../utilities/inquirer");                          // Import inquirer.js
const logo = require("../utilities/logo");                                  // Import logo.js

const start = async () => {
    logo();             // Display logo
    await mainMenu();   // Display main menu
}

const mainMenu = async () => {
    const data = await inquirer.mainMenu();

    // Switch statement to handle user selection
    switch (data.mainMenu) {
        case 'View All Employees':
            fetch('http://localhost:3000/api/employees', {
                method: 'GET',
            })
                .then((response) => {
                    return inquirer.pause(); // Pause
                })
                .then(() => {
                    mainMenu(); // Return to the main menu
                })
            break;

        case 'Add Employee':
            fetch('http://localhost:3000/api/employees', {
                method: 'POST',
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