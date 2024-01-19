const mysql = require('mysql2');
require('dotenv').config()
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: process.env.DB_USER,
      // TODO: Add MySQL password here
      password: process.env.DB_PASSWORD,
      database: 'regularCompany_db'
    },
    console.log(`Connected to the movies_db database.`)
  );
db.connect((err)=>{
    if(err) throw err
})
module.exports = db