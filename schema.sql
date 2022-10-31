DROP DATABASE IF EXISTS combat_db;

CREATE DATABASE combat_db;

USE combat_db;

CREATE TABLE player (
    id INT NOT NULL,
    name VARCHAR(30) NOT NULL,
    HP_Max INT NOT NULL,
    HP_Current INT NOT NULL,
    AC INT NOT NULL,
    size VARCHAR(30),
    speed INT NOT NULL
);

INSERT INTO player (id, name, HP_Max, HP_Current, AC, size, speed)
VALUES
    ( 01, "Erasmus", 44, 30, 12, "Medium", 30),
    ( 02, "Zelirya", 50, 50, 18, "Medium", 30),
    ( 03, "Sariel", 52, 10, 17, "Medium", 30),
    ( 04, "Buck", 45, 45, 15, "Medium", 30),
    ( 05, "Jasmijn", 40, 30, 14, "Medium", 30);

SELECT * FROM player;

