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
    id ,
    title ,
    salary ,
    department_id 
);
-- employees, ids, first names, last names, job titles, departments, salaries, and managers --
CREATE TABLE employee (
id ,
first_name ,
last_name ,
role_id ,
manager_id ,
);