var connection = require("./connection.js");
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function(tableInput, val, cb) {
    connection.query('INSERT INTO '+tableInput+ " (burger_name) VALUES ('"+val+"');", function(err, result) {
      if (err)
        throw err;
      cb(result);
    });
  },
  updateOne: function(tableInput, condition, cb){
    connection.query('UPDATE ' +tableInput+ ' SET devoured=true WHERE id='+condition+';', function (err, result) {
      if (err) throw err
        cb(result);
      })
    }
  };
module.exports = orm;
