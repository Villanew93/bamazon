var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  
  port: 3306,
  
  user: "root",

  password: "@4DaCode",
  database: "bamazon"
});


connection.query("SELECT * FROM products", function(err, res) {
    if(err) throw err;
    console.log(res);
  });
