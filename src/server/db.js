const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: 3309,
  password: '12345678',
  database: 'adder'
})

module.exports = connection
