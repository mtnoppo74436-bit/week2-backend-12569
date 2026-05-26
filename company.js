"use strict";
const employees = [
    { id: 1, name: "Alice", role: "Developer" },
    { id: 2, name: "Bob", role: "Designer" },
    { id: 3, name: "Charlie", role: "Product Manager" }
];
const employeeNames = employees.map((emp) => {
    return ` Name${emp.name} - Role: ${emp.role}`;
});
console.log(employeeNames);
