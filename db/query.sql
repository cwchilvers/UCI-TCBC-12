SELECT department.name AS department, role.title AS role, role.salary, employee.first_name, employee.last_name
FROM employee                           /* From employee table (source table) */
LEFT JOIN role                          /* Join employee and role tables */
ON employee.role_id = role.id           /* Based on role_id column in employee table and id column in role table */
LEFT JOIN department                    /* And then join role and department tables */            
ON role.department_id = department.id   /* Based on department_id column in role table and id column in department table */
ORDER BY department.name;               /* Sort everything by department name */