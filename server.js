//calling connection to mysql2 and inquirer
const db = require('./db/connection.js')
const inquirer = require('inquirer')

//main menu function start (called at bottom of code)
function menu() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What would you like to do?',
                choices: ['View Roles', 'View Departments', 'View Employees', 'Update Employee Role', 'Add Employee', 'Add Role', 'Add Department', 'Exit'],
                name: 'answer',
            },
        ]).then(({ answer }) => {
            //switch case start
            switch (answer) {
                case 'View Roles':
                    viewRoles()
                    break;
                case 'View Departments':
                    viewDepartments()
                    break;
                case 'View Employees':
                    viewEmployees()
                    break;
                case 'Update Employee Role':
                    updateEmployeeRole()
                    break;
                case 'Add Employee':
                    addEmployee()
                    break;
                case 'Add Role':
                    addRole()
                    break;
                case 'Add Department':
                    addDepartment()
                    break;
                default:
                    process.exit()
            }
            //switch case end
        })
}
//menu function end

//view functions start (called in switch case)
function viewRoles() {
    db.promise().query('SELECT title,salary,department.names AS department FROM role JOIN department ON role.department_id = department.id')
        .then(([data]) => {
            console.table(data)
            menu()
        })
}
//viewRoles end
function viewDepartments() {
    db.promise().query('SELECT names AS departments , role.title AS roles FROM department JOIN role ON department.id = role.department_id')
        .then(([data]) => {
            console.table(data)
            menu()
        })
}
//viewDepartments end
function viewEmployees() {
    db.promise().query('SELECT first_name,last_name,role.title,role.salary FROM employee JOIN role ON employee.role_id = role.id')
        .then(([data]) => {
            console.table(data)
            menu()
        })
}
//viewEmployees end

//update function start (called in switch case)
function updateEmployeeRole() {
    //query to populate list choices
    db.promise().query('SELECT id AS value, title AS name FROM role')
        .then(([results]) => {
            const options = results
            inquirer
                .prompt([
                    {
                        type: 'list',
                        message: 'Employees New Role',
                        choices: options,
                        name: 'role',
                    },
                    {
                        type: 'input',
                        message: 'Enter Employee first name',
                        name: 'firstName',
                    },
                    {
                        type: 'input',
                        message: 'Enter Employee last name',
                        name: 'lastName',
                    }

                ]).then(({ role, firstName, lastName }) => {
                    console.log(role, firstName, lastName)
                    //query to update employee role 
                    db.promise().query('UPDATE employee SET role_id =? WHERE first_name = ?', [role, firstName, lastName])
                        .then(() => {
                            console.log("Employee's Role Updated")
                            menu()
                        })
                })
        })
}
//updateEmployeeRole function end

//add functions start (called in switch case)
function addEmployee() {
    //query to populate list choices
    db.promise().query('SELECT id AS value, title AS name FROM role')
        .then(([results]) => {
            const options = results
            inquirer
                .prompt([
                    {
                        type: 'input',
                        message: 'Employee First Name',
                        name: 'firstName',
                    },
                    {
                        type: 'input',
                        message: 'Employee Last Name',
                        name: 'lastName',
                    },
                    {
                        type: 'list',
                        message: 'Employee Role Title',
                        choices: options,
                        name: 'role',
                    }

                ]).then(({ firstName, lastName, role }) => {
                    //query to to add new employee
                    db.promise().query('INSERT INTO employee (first_name, last_name, role_id) VALUES (?,?,?)', [firstName, lastName, role])
                        .then(() => {
                            console.log('Employee added')
                            menu()
                        })
                })
        })
}
//addEmployee function end
function addRole() {
    //query to populate list choices
    db.promise().query('SELECT id AS value, names AS name FROM department')
        .then(([results]) => {
            const options = results

            inquirer
                .prompt([
                    {
                        type: 'input',
                        message: 'Role Title',
                        name: 'title',
                    },
                    {
                        type: 'input',
                        message: 'Role Salary',
                        name: 'salary',
                    },
                    {
                        type: 'list',
                        message: 'Role Department',
                        choices: options,
                        name: 'department',
                    },
                ]).then(({ title, salary, department }) => {
                    //query to add new role
                    db.promise().query('INSERT INTO role ( title, salary, department_id ) VALUES ( ?, ?, ? )', [title, salary, department])
                        .then(() => {
                            console.log('Role added')
                            menu()

                        })
                })
        })
}
//addRole function end
function addDepartment() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Department name',
                name: 'name',
            },
        ]).then(({ name }) => {
            db.promise().query('INSERT INTO department (names) VALUES(?)', name)
                .then(() => {
                    console.log('Department added')
                    menu()
                })
        })
}
//addDepartment function end

//menu function call
menu()