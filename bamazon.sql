DROP DATABASE IF EXISTS bamazon;
DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
item_id INTEGER NOT NULL AUTO_INCREMENT,
product_name VARCHAR(10) NOT NULL,
department_name VARCHAR(40) NOT NULL,
price DECIMAL(10,2) NOT NULL,
stock_quantity INTEGER(10) NOT NULL,
PRIMARY KEY (item_id)
);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES
("Full Metal Alchemist", "Mangas/Books" , 15, 200),
("One Piece", "Mangas/Books", 20, 102),
("One Punch", "Mangas/Books", 10, 307),
("Cow Boy Bepop", "Mangas/Books", 17, 70),
("Dragon Ball Super", "Mangas/Books", 4, 9),
("Future Diary", "Mangas/Books", 12, 27),
("Trigun", "Mangas/Books", 23, 78),
("Naruto Shippuden", "Mangas/Books", 17, 200),
("Berserk", "Mangas/Books", 23,66 ),
("Hunter X Hunter", "Mangas/Books", 25, 97);

SELECT * FROM products;


