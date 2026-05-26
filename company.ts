interface Employee{
    id:number;
    name:string;
    role:string;
}

const employees:Employee[] = [
    { id: 1, name: "Alice", role: "Developer" },
    { id: 2, name: "Bob", role: "Designer" },
    { id: 3, name: "Charlie", role: "Product Manager" }
];

const employeeNames: string[] = employees.map((emp: Employee): string => {
    return ` Name${emp.name} - Role: ${emp.role}`;
});

console.log(employeeNames);