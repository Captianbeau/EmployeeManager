IF EXISTS DROP DATABASE regularCompany_db;
CREATE DATABASE regularCompany_db;

USE regularCompany_db;
-- department name,id --
CREATE TABLE department (
    id INT PRIMARY KEY,
    names VARCHAR(30)
);
-- roles job title, id, department, salary --
CREATE TABLE role (
    id INT PRIMARY KEY ,
    title VARCHAR (30),
    salary INT,
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);
-- employees, ids, first names, last names, job titles, departments, salaries, and managers --
CREATE TABLE employee (
id INT,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT,
manager_id INT,
FOREIGN KEY (role_id)
REFERENCES role(id)
ON DELETE SET NULL
);