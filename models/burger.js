var orm = require("../config/orm.js");

var burger = {
  select: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  insert: function(name, cb) {
    orm.insertOne("burgers", name, cb);
  },
  update: function(id, cb) {
    orm.updateOne("burgers", id, cb);
  }
};

// Export the database functions for the controller
module.exports = burger;
