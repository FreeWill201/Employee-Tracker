const mysql = require("mysql2");

// create a connection to the database
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "Employee_db",
});

// define a constructor function for performing SQL queries
function Database(connection) {
  this.connection = connection;
}

// define a method for getting all departments
Database.prototype.getAllDepartments = function () {
  return this.connection.promise().query("SELECT * FROM department");
};

// define a method for getting all roles
Database.prototype.getAllRoles = function () {
  return this.connection.promise().query("SELECT * FROM role");
};

// define a method for getting all employees
Database.prototype.getAllEmployees = function () {
  return this.connection.promise().query("SELECT * FROM employee");
};

// define a method for adding a department
Database.prototype.addDepartment = function (name) {
  return this.connection
    .promise()
    .query("INSERT INTO department SET ?", { name });
};

// define a method for adding a role
Database.prototype.addRole = function (title, salary, department_id) {
  return this.connection
    .promise()
    .query("INSERT INTO role SET ?", { title, salary, department_id });
};

// define a method for adding an employee
Database.prototype.addEmployee = function (
  first_name,
  last_name,
  role_id,
  manager_id
) {
  return this.connection.promise().query("INSERT INTO employee SET ?", {
    first_name,
    last_name,
    role_id,
    manager_id,
  });
};

// define a method for updating an employee's role
Database.prototype.updateEmployeeRole = function (employee_id, role_id) {
  return this.connection
    .promise()
    .query("UPDATE employee SET role_id = ? WHERE id = ?", [
      role_id,
      employee_id,
    ]);
};

module.exports = Database;
