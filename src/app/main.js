const logo = require("../components/logo"); 
const mainMenu_prompt = require("../utilities/prompts/mainMenu_prompt");
const pause = require("../utilities/prompts/pause_prompt");

const fetchAsync = async (url, method) => {
    const response = await fetch(url, { method });
    return pause();
};

const start = async () => {
    logo();
    await mainMenu();
};

// Main menu
const mainMenu = async () => {
    const data = await mainMenu_prompt();

    switch (data.mainMenu) {
        case 'View All Employees':
            await fetchAsync('http://localhost:3000/api/employees', 'GET');
            break;

        case 'Add Employee':
            await fetchAsync('http://localhost:3000/api/add-employee', 'POST');
            break;

        case 'Update Employee Role':
            await fetchAsync('http://localhost:3000/api/update-employee', 'POST');
            break;

        case 'View All Roles':
            await fetchAsync('http://localhost:3000/api/roles', 'GET');
            break;

        case 'Add Role':
            await fetchAsync('http://localhost:3000/api/add-role', 'POST');
            break;

        case 'View All Departments':
            await fetchAsync('http://localhost:3000/api/departments', 'GET');
            break;

        case 'Add Department':
            await fetchAsync('http://localhost:3000/api/add-department', 'POST');
            break;

        case 'Quit':
        process.exit();
    }

    await mainMenu();
};

module.exports = {
    start,
    mainMenu
};
