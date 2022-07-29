var employees = []

function Employee(name, jobTitle, salary, status="Full Time") {
    this.Name = name;
    this.Position = jobTitle;
    this.salary = salary;
    this.status = status;
    employees.push(this)
}

Employee.prototype.printEmployeeForm = function() {
    console.log(this)
}

var jane = new Employee("Jane Doe", "Instructor", 90000, "Part Time")
var john = new Employee("John Doe", "Data Entry", 30000)
var josh = new Employee("Josh Doe", "Engineer", 160000)

jane.printEmployeeForm()
john.printEmployeeForm()
josh.printEmployeeForm()

console.log(employees)
