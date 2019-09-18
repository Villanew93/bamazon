var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  
  port: 3306,
  
  user: "root",

  password: "@4DaCode",
  database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    start();
  });

  function start() {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      console.log(res);
     questions();
    });

}

function questions() {
    connection.query("SELECT * FROM products", function(err, results) {
        if (err) throw err;
    inquirer
      .prompt([{
        name: "question",
        type: "list",
    
choices: function() {
            var choiceArray = [];
            for (var i = 0; i < results.length; i++) {
              choiceArray.push(results[i].product_name);
            }
            return choiceArray;
        },
        message: "Hello! Which item would you like to buy?"
    },
        {
            name:"amount",
            type:"input",
            message:"How many would you like to buy?"
        }
    ])
      .then(function(answer) {
          var newItems;
          for (var i = 0; i< results.length; i++) {
              if (results[i].product_name === answer.question) {
                  newItems = results[i];
              }
          }

          if (newItems.stock_quantity > parseInt(answer.amount)) {
        
            var newQuantity = newItems.stock_quantity - parseInt(answer.amount);


        connection.query(
            "UPDATE products SET ? WHERE ?",
            [{
                stock_quantity: newQuantity
            },
            {
                item_id: newItems.item_id
            }
            ],
            function(error) {
                if (error) throw err;
                var price = newItems.price * parseInt(answer.amount);
                console.log("Total price: $" + price);
            }
            );

        }

            else {
                console.log("Insufficient Quantity!")
                start();
            }
          
        });
    });
}



      
  

