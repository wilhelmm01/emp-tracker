
const mysql = require("mysql2");
const inquirer = require("inquirer");
const cTable = require('console.table');

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "employee"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log ("*******************************");
  console.log ("*     EMPLOYEE TRACKER        *");
  console.log ("*******************************");
  promptUser();
});

function promptUser() {
    inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "View All Departments",
        "View All Roles",
        "Add new Employee",
        "Update Employee Role",
        "Exit"
      ]
    })
    .then(function(answer) {
      switch (answer.action) {

      case "View All Employees":
        viewAllEmployees();
        break;

      case "View All Departments":
        viewAllDepartments();
        break;

      case "View All Roles":
        viewAllRoles();
        break;

      case "Add new Employee":
        addEmployee();
        break;

      case "Add new Department":
        addDepartment();
        break;

      case "Add new Role":
        addRole();
        break;

      case "Update Employee Role":
          updateRole();
          break;

        
      case "Exit":
        connection.end();
        break;
      }
    });
}

function viewAllEmployees() {
  var query = "SELECT employee.id, first_name, last_name, role_Id FROM employee";
      connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        promptUser()
    });
}

function viewAllDepartments() {
  var query = "SELECT id, dept_name FROM department";
      connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        promptUser()
    });
}

function viewAllRoles() {
  var query = "SELECT id, title FROM role";
      connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        promptUser()
    });
}


function addEmployee() {
  inquirer
    .prompt([
      {
        name: "first_name",
        type: "input",
        message: "What is the first name of the new employee?"
      },
      {
        name: "last_name",
        type: "input",
        message: "What is the last name of the new employee?"
      },
      
    ])
    .then(function(answer) {
      connection.query(
        `INSERT INTO employee SET ?`,
        {
          first_name: answer.first_name,
          last_name: answer.last_name,
          role_id: answer.role_id,
        },
        function(err) {
          if (err) throw err;
          console.log("Your new employee profile was created successfully!");
          // re-prompt the user
          promptUser();
        }
      );
    });
}



