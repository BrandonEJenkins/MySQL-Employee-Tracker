use employee_trackerdb;

-- SELECT * FROM department;
-- INSERT INTO department (name) VALUES('Information Security');

-- SELECT * FROM employee;
-- SELECT CONCAT(first_name, ' ', last_name) as fullName FROM employee;
-- INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES('Tim', 'Heidecker', 9, null);

-- SELECT * FROM role;
-- INSERT INTO role (title, salary, department_id) VALUES('Lead IS Analyst', 172500, 9);

/*
-- view all departments roles employees
SELECT d.name as 'Department', r.title as 'Position', e.first_name as 'First Name', e.last_name as 'Last Name', r.salary 
FROM department AS d
INNER JOIN role AS r
ON d.id = r.department_id
INNER JOIN employee AS e
ON r.id = e.role_id;
*/

/*
-- view all departments roles employees
SELECT name, title, first_name, last_name, salary 
FROM department
INNER JOIN role
ON department.id = role.department_id
INNER JOIN employee
ON role.id = employee.role_id;
*/

/*
-- view employees by dept
SELECT name, first_name, last_name
FROM department
INNER JOIN role
ON department.id = role.department_id
INNER JOIN employee
ON role.id = employee.role_id;
*/

/*
-- view employees by manager
SELECT a.first_name as Mngr_First_Name, a.last_name as Mngr_Last_Name, b.first_name as Empl_First_Name, b.last_name as Empl_Last_Name
FROM employee as a LEFT JOIN employee as b
ON a.id = b.id
WHERE a.id = b.manager_id;
-- GROUP BY Manager;
*/

/*
-- insert test employee prior to removal and display all
INSERT INTO department (name) VALUES('Test Dept');
INSERT INTO role (title, salary, department_id) VALUES('Test Role', 5000, 9);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES('Test_first', 'Test_last', 9, null);



-- view all departments roles employees
SELECT d.name as 'Department', r.title as 'Position', e.first_name as 'First Name', e.last_name as 'Last Name', r.salary 
FROM department AS d
INNER JOIN role AS r
ON d.id = r.department_id
INNER JOIN employee AS e
ON r.id = e.role_id;
*/

-- DELETE FROM employee WHERE id = 9;
-- DELETE FROM role WHERE id = 9;
-- DELETE FROM employee WHERE id = 10;
-- SELECT * FROM employee;


-- remove newly inserted test employee
DELETE e, role
FROM employee AS e
INNER JOIN role
ON e.id = role.department_id
WHERE e.id > 8;

SELECT * FROM role;

/*
DELETE FROM employee
WHERE id > 8;

SELECT * FROM employee;



DELETE FROM role
WHERE id > 8;

SELECT * FROM role;



DELETE FROM department
WHERE id > 4;

SELECT * FROM department;
*/



