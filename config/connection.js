// Set up MySQL connection.
var mysql = require("mysql");
require('dotenv').config();

//establish a pool connection
var pool  = mysql.createPool({
  host: "us-cdbr-iron-east-04.cleardb.net",
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "heroku_e0fe6548ff59ee9"
});

module.exports = pool;

// var connection = mysql.createConnection({
//   host: "us-cdbr-iron-east-04.cleardb.net",
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: "heroku_e0fe6548ff59ee9"
// });

// module.exports = connection;

// // Make connection.
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });
