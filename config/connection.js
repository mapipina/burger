const mysql = require('mysql');
require('dotenv').config();

//establish a pool connection
var pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "heroku_e0fe6548ff59ee9"
});

module.exports = pool;