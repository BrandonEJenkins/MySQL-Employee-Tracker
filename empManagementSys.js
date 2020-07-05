var mysql = require('mysql2');
var inquirer = require('inquirer');
const cTable = require('console.table');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Bjbootcamp1!',
    database: 'employee_trackerdb'
});

connection.connect(function (err) {
    if (err) throw err;
     manageEmpSys();
});

function manageEmpSys() {
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
}

function addEmployee() {};
function viewEmployees() {
    var query = 
        'SELECT name, title, first_name, last_name, salary FROM department INNER JOIN role ON department.id = role.department_id INNER JOIN employee ON role.id = employee.role_id;'
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        // console.log(res);
    })
    };
function viewByDept() {};
function viewByMngr() {};
function removeEmp() {};
function updateEmpRole() {};
function updateEmpMngr() {};

