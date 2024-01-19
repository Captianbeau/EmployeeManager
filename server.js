// protect info and make a user other than root and do I create a connection with the db before or after the .then

//view all roles,departments,employees
//add department,role, employee
//update employee role

const express = require('express')
const mysql =require('mysql2')
const inquirer = require('inquirer')

//const PORT
const app = express();

app.use(express.urlencoded({extended: false}))
app.use(express.json())
//db= mysql.createConnection
// new inquirer.Separator()
inquirer
    .prompt([
        {
            type:'list',
            message:'',
            choices:'',
            name:'',
        },
        {
            type:'list',
            message:'',
            choices:'',
            name:'',
        },
        {
            type:'list',
            message:'',
            choices:'',
            name:'',
        },
        {
            type:'list',
            message:'',
            choices:'',
            name:'',
        },
    ]) 
    .then((manage) => {
//db.query  
    })