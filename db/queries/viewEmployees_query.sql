SELECT employee.id AS id, department.name AS department, role.title AS role, role.salary, employee.first_name, employee.last_name
FROM employee
LEFT JOIN role ON employee.role_id = role.id
LEFT JOIN department ON role.department_id = department.id
ORDER BY employee.id;