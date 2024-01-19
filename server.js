

//view all roles,departments,employees
//add department,role, employee
//update employee role

const db = require('./db/connection.js')
const inquirer = require('inquirer')





// new inquirer.Separator()
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
            switch (answer) {
                case 'View Roles':
                    viewRoles()
                    break;
                case 'View Departments':
                    //View departments
                    break;
                case 'View Employees':
                    //View Employees
                    break;
                case 'Update Employee Role':
                    //Update Employee Role
                    break;
                case 'Add Employee':
                    //Add Employee
                    break;
                case 'Add Role':
                    //Add Role
                    break;
                case 'Add Department':
                    //Add Department
                    break;
                default:
                    process.exit()
            }
        })
}
function viewRoles() {
    db.promise().query('SELECT title,salary,department.names FROM role JOIN department ON role.department_id = department.id')
        .then(([data]) => {
            console.table(data)
            menu()
        })
}
function viewDepartments() {
    //want to add employee last_name to this table
    db.promise().query('SELECT names,roles.titles FROM department JOIN role ON department.id = role.department_id')
        .then(([data]) =>{
            console.table(data)
            menu()
        })
}
//add employee inquirer .then (funtionallity (dbstuff))

// inquirer
//     .prompt([
//         {
//             type:'list',
//             message:'',
//             choices:'',
//             name:'',
//         },
//         {
//             type:'list',
//             message:'',
//             choices:'',
//             name:'',
//         },
//         {
//             type:'list',
//             message:'',
//             choices:'',
//             name:'',
//         },
//         {
//             type:'list',
//             message:'',
//             choices:'',
//             name:'',
//         },
//     ]) 
//     .then((manage) => {
// //db.query  
//     })

menu()