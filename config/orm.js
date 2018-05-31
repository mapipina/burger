var connection = require("./connection.js");

// var con = function(callback){
//     connection.getConnection(function(err, connection) {
//          if (err){
//             connection.release();
//             throw (err);          
//         }
//         callback(connection); 
//     });
// };

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    con(connection=>{connection.query(queryString, function(err, result) {
              if (err) throw err;
              connection.release();
              cb(result);
            });
      });
  }
  // insertOne: function(tableInput, val, cb) {
  //   connection.query('INSERT INTO '+tableInput+ " (burger_name) VALUES ('"+val+"');", function(err, result) {
  //     if (err)
  //       throw err;
  //     cb(result);
  //   });
  // },
  // updateOne: function(tableInput, condition, cb){
  //   connection.query('UPDATE ' +tableInput+ ' SET devoured=true WHERE id='+condition+';', function (err, result) {
  //     if (err) throw err
  //       cb(result);
  //     })
  //   }
  };
module.exports = orm;
