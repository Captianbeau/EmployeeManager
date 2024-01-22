//call for mysql2 and dotenv
const mysql = require('mysql2');
require('dotenv').config()

//connect to mysql for username and password
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: 'regularCompany_db'
    },
  );
db.connect((err)=>{
    if(err) throw err
})
//export db
module.exports = db