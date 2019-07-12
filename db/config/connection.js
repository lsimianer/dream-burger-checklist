var mysql = require("mysql");

var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  connection = mysql.createConnection({
    host: "us-cdbr-iron-east-02.cleardb.net",
    port: 3306,
    user: "baed21bf7258df",
    password: "b60b61e0!",
    database: "heroku_1c2fb4f3b3ae295"
  });
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;


// "mysql://baed21bf7258df:b60b61e0@us-cdbr-iron-east-02.cleardb.net/heroku_1c2fb4f3b3ae295?reconnect=true"