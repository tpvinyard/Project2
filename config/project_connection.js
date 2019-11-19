// for project #2 replace password and database
//      Rename file
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// This connects Node to MySQL.
// the connection is exported for use with other modules
console.log("inside connection.js");
 

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "burgersDB"
});
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return; }  
console.log("inside connection   mysql connected as id " + connection.threadId);
});
module.exports = connection;
