var pool = require("./connection.js");

var orm = {
  selectAll: function(tableInput, cb){
      pool.getConnection(function(err, connection) {
    // Use the connection
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function (error, results) {
        cb(results);
        // And done with the connection.
        connection.release();
        // Handle error after the release.
        if (error) throw error;
        // Don't use the connection here, it has been returned to the pool.
      });
    })
  },
  insertOne: function(tableInput, val, cb){
      pool.getConnection(function(err, connection) {
    // Use the connection
      connection.query('INSERT INTO '+tableInput+ " (burger_name) VALUES ('"+val+"');", function (error, results) {
        cb(results);
        // And done with the connection.
        connection.release();
        // Handle error after the release.
        if (error) throw error;
        // Don't use the connection here, it has been returned to the pool.
      });
    })
  },
  updateOne: function(tableInput, condition, cb){
      pool.getConnection(function(err, connection) {
    // Use the connection
      connection.query('UPDATE ' +tableInput+ ' SET devoured=true WHERE id='+condition+';', function (error, results) {
        cb(results);
        // And done with the connection.
        connection.release();
        // Handle error after the release.
        if (error) throw error;
        // Don't use the connection here, it has been returned to the pool.
      });
    })
  }

}

// var orm = {
//   selectAll: function(tableInput, cb) {
//     var queryString = "SELECT * FROM " + tableInput + ";";
//     connection.query(queryString, function(err, result) {
//               if (err) throw err;
//               cb(result);
//             });
//   },
//   insertOne: function(tableInput, val, cb) {
//     connection.query('INSERT INTO '+tableInput+ " (burger_name) VALUES ('"+val+"');", function(err, result) {
//       if (err)
//         throw err;
//       cb(result);
//     });
//   },
//   updateOne: function(tableInput, condition, cb){
//     connection.query('UPDATE ' +tableInput+ ' SET devoured=true WHERE id='+condition+';', function (err, result) {
//       if (err) throw err
//         cb(result);
//       })
//     }
//   };
module.exports = orm;
