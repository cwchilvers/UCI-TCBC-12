<h1 align="center">
  CLI Employee Tracker
</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/MySQL-4479A1.svg?style=for-the-badge&logo=MySQL&logoColor=white" alt="MySQL">
  <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" alt="MIT License">
</p>

<h4 align="center">A command line application for managing a database of employees, roles, and departments.</h4>

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Technologies Used](#technologies-used)
5. [License](#license)
6. [Credits](#credits)
7. [Contact Information](#contact-information)

## Description
CLI Employee Tracker is a Node.js application that allows users to manage a database of employees, roles, and departments. It uses the [MySQL](https://www.npmjs.com/package/mysql) package to connect to a MySQL database and perform queries. The application also utilizes the [Inquirer](https://www.npmjs.com/package/inquirer) package to prompt the user for input.

With this CLI application, users can perform the following tasks:
- View employees, roles, and departments
- Add new employees, roles, and departments
- Update existing employee roles
- View employees by manager
- View the total utilized budget of a department

## Installation
1. Clone the repository locally.
2. Run `npm install` to install the required dependencies.
3. Create a MySQL database and seed it with data. The database schema and seed data can be found in the `db` folder.
4. Create a `.env` file in the root directory with the following contents:
```
DB_HOST=localhost
DB_USER=your_username
DB_PASS=your_password
DB_NAME=your_database
```
Replace `your_username`, `your_password`, and `your_database` with your MySQL username, password, and database name respectively.

5. Once the database is created and seeded, and the `.env` file is created, run `npm start` to start the application.

## Usage
1. Run `npm start` to start the application.
2. The user will be presented with a menu of options to choose from.
3. Select an option using the arrow keys and press enter.
4. The user will then be prompted for any additional information required to complete the selected action.
5. Once the action is completed, the user will be returned to the main menu.
6. The user can exit the application at any time by selecting the `Exit` option from the main menu.

## Technologies Used
- cli-table3
- Dot Env
- Inquirer
- JavaScript
- MySQL
- Node.js


## License
This project is licensed under the MIT License. See the [MIT License](https://opensource.org/licenses/mit/) page for details.

## Credits
- [cli-table3](https://www.npmjs.com/package/cli-table3)
- [Dot Env](https://www.npmjs.com/package/dotenv)
- [Inquirer](https://www.npmjs.com/package/inquirer)
- [MySQL](https://www.npmjs.com/package/mysql)
  
## Contact Information
<p align="center">
    <a href="mailto:cwchilvers@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Unity"></a>
    <a href="https://github.com/cwchilvers"><img src="https://img.shields.io/badge/GitHub-181717.svg?style=for-the-badge&logo=GitHub&logoColor=white"></a>
</p>
