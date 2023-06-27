const logo = require("../components/logo");                                 // Import logo.js
const mainMenu_prompt = require("../utilities/prompts/mainMenu_prompt");    // Import inquirer.js
const pause = require("../utilities/prompts/pause_prompt");                 // Import inquirer.js

const start = async () => {

    logo();             // Display logo
    await mainMenu();   // Display main menu
}

const mainMenu = async () => {
    const data = await mainMenu_prompt();

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
            fetch('http://localhost:3000/api/add-employee', {
                method: 'POST',
            })
                .then((response) => {
                    return pause();
                })
                .then(() => {
                    mainMenu(); 
                })
            break;

        case 'Update Employee Role':
            fetch('http://localhost:3000/api/update-employee', {
                method: 'POST',
            })
                .then((response) => {
                    return pause(); 
                })
                .then(() => {
                    mainMenu(); 
                })
            break;

        case 'View All Roles':
            fetch('http://localhost:3000/api/roles', {
                method: 'GET',
            })
                .then((response) => {
                    return pause(); 
                })
                .then(() => {
                    mainMenu();
                })
            break;

        case 'Add Role':
            fetch('http://localhost:3000/api/add-role', {
                method: 'POST',
            })
                .then((response) => {
                    return pause(); 
                })
                .then(() => {
                    mainMenu(); 
                })
            break;

        case 'View All Departments':
            fetch('http://localhost:3000/api/departments', {
                method: 'GET',
            })
                .then((response) => {
                    return pause(); 
                })
                .then(() => {
                    mainMenu(); 
                })
            break;

        case 'Add Department':
            fetch('http://localhost:3000/api/add-department', {
                method: 'POST',
            })
                .then((response) => {
                    return pause(); 
                })
                .then(() => {
                    mainMenu(); 
                })
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