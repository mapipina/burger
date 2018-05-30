// Set up MySQL connection.
const mysql = require("mysql");
require('dotenv').config();

//establish a pool connection
var pool = mysql.createPool({
  connectionLimit: 10,
  host: "us-cdbr-iron-east-05.cleardb.net",
  user: "b3237c9b839aa8:af17f223",
  password: "us-cdbr-iron-east-04.cleardb.net",
  database: "heroku_e0fe6548ff59ee9"
});




module.exports = pool;

// var connection = mysql.createConnection({
//   port: 3306,
//   host: "localhost",
//   user: "root",
//   password: "Nole1990!",
//   database: "burgers_db"
// });

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
