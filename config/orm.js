var pool = require("./connection.js");


var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    pool.query(queryString, function(err, result) {
              if (err) throw err;
              cb(result);
              connection.release();
            });
  },
  insertOne: function(tableInput, val, cb) {
    pool.query('INSERT INTO '+tableInput+ " (burger_name) VALUES ('"+val+"');", function(err, result) {
      if (err)
        throw err;
      cb(result);
      connection.release();
    });
  },
  updateOne: function(tableInput, condition, cb){
    pool.query('UPDATE ' +tableInput+ ' SET devoured=true WHERE id='+condition+';', function (err, result) {
      if (err) throw err
        cb(result);
        connection.release();
      })
    }
  };
module.exports = orm;
