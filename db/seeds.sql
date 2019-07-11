INSERT INTO burgers (burger_name, devoured) VALUES ('Pepperjack of death', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Habenero hell burger.', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('stinky vegan communist burger.', false);

select * from burgers;

select distinct burger_name, id from burgers where (id%2) = 0;