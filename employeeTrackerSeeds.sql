DROP DATABASE IF EXISTS employee_trackerdb;

CREATE DATABASE employee_trackerDB;

use employee_trackerDB;

-- name is department name
CREATE TABLE department (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role (
	id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NULL,
    salary DECIMAL(10,2) NULL,
    department_id INT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE employee (
	id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    role_id INT NULL,
    manager_id INT NULL,
    PRIMARY KEY (id)
);

INSERT INTO department (name) VALUES('Sales');
INSERT INTO department (name) VALUES('Engineering');
INSERT INTO department (name) VALUES('Finance');
INSERT INTO department (name) VALUES('Legal');
-- INSERT INTO department (name) VALUES();
-- INSERT INTO department (name) VALUES();
-- INSERT INTO department (name) VALUES();
-- INSERT INTO department (name) VALUES();

INSERT INTO role (title, salary, department_id) VALUES('Sales Lead', 150000, 1);
INSERT INTO role (title, salary, department_id) VALUES('Salesperson', 85000, 1);
INSERT INTO role (title, salary, department_id) VALUES('Lead Engineer',185000, 2);
INSERT INTO role (title, salary, department_id) VALUES('Software Engineer', 125000, 2);
INSERT INTO role (title, salary, department_id) VALUES('Accountant', 135000, 3);
INSERT INTO role (title, salary, department_id) VALUES('Legal Team Lead', 210000, 4);
INSERT INTO role (title, salary, department_id) VALUES('Lawyer', 190000, 4);
INSERT INTO role (title, salary, department_id) VALUES('Lead Engineer', 175000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES('April', 'Ennis', 1, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES('Christina', 'Smith', 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES('Brandon', 'Jenkins', 3, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES('Karmen', 'Wills', 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES('Louis', 'Frederickson', 5, 6);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES('Yashira', 'Wallace', 6, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES('Dani', 'Aveden', 7, 6);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES('Ashley', 'Johnson', 8, 3);
