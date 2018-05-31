USE heroku_e0fe6548ff59ee9;
-- USE burgers_db;

DROP TABLE IF EXISTS burgers;
CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
