INSERT INTO department (name) VALUES ('Sales');
INSERT INTO department (name) VALUES ('Engineering');
INSERT INTO department (name) VALUES ('Finance');

INSERT INTO role (title, salary, department_id) VALUES ('Salesperson', 60000, 1);
INSERT INTO role (title, salary, department_id) VALUES ('Sales Manager', 80000, 1);
INSERT INTO role (title, salary, department_id) VALUES ('Software Engineer', 75000, 2);
INSERT INTO role (title, salary, department_id) VALUES ('Lead Engineer', 100000, 2);
INSERT INTO role (title, salary, department_id) VALUES ('Accountant', 60000, 3);
INSERT INTO role (title, salary, department_id) VALUES ('Financial Analyst', 80000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('John', 'Doe', 1, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Jane', 'Smith', 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Bob', 'Johnson', 3, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Mike', 'Williams', 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Alice', 'Jones', 5, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Chris', 'Davis', 6, NULL);
