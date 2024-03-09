USE salon_pos;

DROP TABLE Wig_client;
DROP TABLE Hair_client;
DROP TABLE Services;
DROP TABLE Billing;
DROP TABLE Administrator;
DROP TABLE Sessions; 

CREATE TABLE Wig_client (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    client_id INTEGER,
    username varchar(30),
    first_name varchar(30),
    last_name varchar(30),
    address varchar(30),
    email varchar(30),
    pin  varchar(225),
    client_type varchar(30)

);

CREATE TABLE Hair_client (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    client_id INTEGER,
    username varchar(30),
    first_name varchar(30),
    last_name varchar(30),
    address varchar(30),
    email varchar(30),
    pin  varchar(225),
    client_type varchar(30)

);

CREATE TABLE Services  (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name varchar(30),
    service_code INTEGER,
    price INTEGER
);

CREATE TABLE Billing   (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    first_name varchar(30),
    last_name varchar(30),
    email varchar(30),
    address varchar(30),
    service_code varchar(30),
    date_of_service DATE,
    price INTEGER,
    service_name varchar(30),
    client_id INTEGER,

);

CREATE TABLE Administrator   (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name varchar(30),
    password varchar(225)
    
);