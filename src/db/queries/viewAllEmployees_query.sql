SELECT department.name AS department, role.title AS role, role.salary, employee.first_name, employee.last_name
FROM employee                           -- Select employee table as the source table
LEFT JOIN role                          -- Join employee and role tables...
ON employee.role_id = role.id           -- ...based on role_id column in employee table and id column in role table
LEFT JOIN department                    -- And then join role and department tables...       
ON role.department_id = department.id   -- ...based on department_id column in role table and id column in department table
ORDER BY department.name;               -- Sort everything by department name