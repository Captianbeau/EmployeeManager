-- !!DROP DATABASE WARNING!! --
DROP DATABASE IF EXISTS regularCompany_db;
CREATE DATABASE regularCompany_db;

-- database to be used --
USE regularCompany_db;

-- department: name,id --
CREATE TABLE department (
    id INT UNIQUE PRIMARY KEY AUTO_INCREMENT,
    names VARCHAR(30)
);

-- role: id, title, salary, department_id --
CREATE TABLE role (
    id INT UNIQUE PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR (30),
    salary INT,
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);

-- employee: id, first_name, last_name, role_id, manager_id --
CREATE TABLE employee (
id INT PRIMARY KEY AUTO_INCREMENT,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT,
manager_id INT,
FOREIGN KEY (role_id)
REFERENCES role(id)
ON DELETE SET NULL,
FOREIGN KEY (manager_id)
REFERENCES employee(id)
ON DELETE SET NULL
);