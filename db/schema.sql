DROP DATABASE IF EXISTS employee;

CREATE DATABASE employee;

USE employee;

CREATE TABLE department (
    id INT AUTO_INCREMENT, 
    dept_name VARCHAR(30) NOT NULL, 
    PRIMARY KEY(id)
);

CREATE TABLE role (
    id INT AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL, 
    salary DECIMAL(6,0) NOT NULL, 
    department_id INT NOT NULL, 
    PRIMARY KEY(id),
    FOREIGN KEY(department_id) REFERENCES department(id)
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT, 
    first_name VARCHAR(30) NOT NULL, 
    last_name VARCHAR(30) NOT NULL, 
    role_id INT NOT NULL, 
    manager_id INT,
    PRIMARY KEY(id),
    FOREIGN KEY(role_id) REFERENCES role(id)
);


INSERT INTO department (dept_name)
VALUES ("Sports Writer"), ("Police Officer"), ("Home Maker"), ("Retired");

INSERT INTO role (title, salary, department_id)
VALUES ("Columnist", 100000, 1), ("House Wife", 0, 1), ("Cop", 40000, 2), ("Couch Potato", 0, 4);

INSERT INTO employee (first_name, last_name, role_id,)
VALUES ("Ray", "Barone", 1), ("Debra", "Barone", 2), ("Robert", "Barone", 3), ("Frank", "Barone", 4), 
SELECT * from employee;