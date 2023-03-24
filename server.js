const { spawn } = require("child_process");
const path = require("path");
const mysql = require("mysql2");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const Database = require("./db.js");

const seedProcess = spawn("mysql", [
  "-h",
  "localhost",
  "-u",
  "username",
  "-p",
  "password",
  "employee_db",
  "<",
  path.join(__dirname, "/Schemas/seed.sql"),
]);

seedProcess.on("exit", (code) => {
  if (code !== 0) {
    console.error(`mysql process exited with code ${code}`);
  } else {
    console.log("Data seeded successfully");
  }
});

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "Employee_db",
});

const db = new Database(connection);

db.getAllDepartments()
  .then(([rows]) => {
    console.table(rows);
  })
  .catch((err) => {
    console.log(err);
  });
