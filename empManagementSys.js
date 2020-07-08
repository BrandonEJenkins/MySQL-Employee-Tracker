var mysql = require('mysql2');
var inquirer = require('inquirer');
const cTable = require('console.table');
var figlet = require('figlet');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Bjbootcamp1!',
    database: 'employee_trackerdb'
});

figlet('Employee Manager', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});

connection.connect(function (err) {
    if (err) throw err;
    employeeSysQuery();
});

function employeeSysQuery() {
    inquirer
        .prompt({
            name: 'action',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'Add Employee',
                'View All Employees',
                'View All Employees By Department',
                'View All Employees By Manager',
                'Remove Employee',
                'Update Employee Role',
                'Update Employee Manager'
            ],
        })
        .then(function (answer) {
            switch (answer.action) {
                case 'Add Employee':
                    addEmployee();
                    break;

                case 'View All Employees':
                    viewEmployees();
                    break;

                case 'View All Employees By Department':
                    viewByDept();
                    break;

                case 'View All Employees By Manager':
                    viewByMngr();
                    break;

                case 'Remove Employee':
                    removeEmp();
                    break;

                case 'Update Employee Role':
                    updateEmpRole();
                    break;

                case 'Update Employee Manager':
                    updateEmpMngr();
                    break;
            }
        });
};

function addEmployee() {
    inquirer
        .prompt([
            {
                name: 'firstName',
                type: 'input',
                message: 'Enter the employee\'s first name: '
            },
            {
                name: 'lastName',
                type: 'input',
                message: 'Enter the employee\'s last name: '
            },
            {
                name: 'department',
                type: 'list',
                message: 'Enter the employee\'s department: ',
                choices: [
                    'Sales',
                    'Engineering',
                    'Finance',
                    'Legal'
                ]
            },
            {
                name: 'title',
                type: 'list',
                message: 'Enter the employee\'s title: ',
                choices: [
                    'Accountant',
                    'Lawyer',
                    'Lead Engineer',
                    'Legal Team Lead',
                    'Sales Lead',
                    'Salesperson',
                    'Software Engineer'
                ]
            },
            {
                name: 'salary',
                type: 'input',
                message: 'Enter the employee\'s salary: '
            },
    ])
    .then(function (answer) {
        connection.query(
            `START TRANSACTION; SELECT * FROM employee; INSERT INTO employee (first_name, last_name) VALUES(${ answer.firstName }, ${ answer.lastName }); INSERT INTO role (title, salary) VALUES(${ answer.title }, ${ answer.salary }); INSERT INTO department (${ answer.department }); COMMIT;`, function(err, res) {
                if (err) throw err;
                console.table(res);

            employeeSysQuery();
        })
    })
};

function viewEmployees() {
    var query = 
        'SELECT name, title, first_name, last_name, salary FROM department INNER JOIN role ON department.id = role.department_id INNER JOIN employee ON role.id = employee.role_id;'
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        // console.log(res);

        employeeSysQuery();
    })
    
};

function viewByDept() {
    var query = 
        'SELECT name, first_name, last_name FROM department INNER JOIN role ON department.id = role.department_id INNER JOIN employee ON role.id = employee.role_id'; 
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        // console.log(res);

        employeeSysQuery();
    })
};

function viewByMngr() {};



function removeEmp() {
    connection.query("SELECT CONCAT(first_name, ' ', last_name) as fullName FROM employee", function (err, results) {
        if (err) throw err;
        inquirer
            .prompt([
                {
                    name: 'choice',
                    type: 'list',
                    choices: function () {
                        var choiceArray = [];
                        for (var i = 0; i < results.length; i++) {
                            choiceArray.push(results[i].fullName);
                        }
                        return choiceArray;
                    },
                    message: 'Which employee do you want to remove?'
                },
            ])
            .then(function (answer) {
                console.log(`Removing ${ answer.choice } from EMS...`);
                
                connection.query(
                    "DELETE FROM employee WHERE CONCAT(first_name, ' ', last_name) = ?",
                    { choice: answer.choice },
                    function(err, res) {
                        if (err) throw err;
                        console.log('Employee: ' + res.first_name + ' ' + res.last_name + ' removed.');
                })
            })

            employeeSysQuery();
        })
};

function updateEmpRole() {};
function updateEmpMngr() {};

