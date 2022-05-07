// Design the same classes by using only Javascript prototypes

// Employee
var Employee = function (id, name) {
  if (!id || !name) {
    throw new Error("Employee id and name are mandatory");
  }
  this.id = id;
  this.name = name;
};

Employee.prototype.setSalary = function (salary) {
  this.salary = salary;
};

Employee.prototype.getId = function () {
  return this.id;
};

Employee.prototype.getName = function () {
  return this.name;
};

Employee.prototype.getSalary = function () {
  return this.salary;
};

const employee = new Employee(1, "Jack");
employee.setSalary(1000);
console.log(employee); // { "id": 1, "name": "Jack", "salary": 1000 }
console.log(employee.getId()); // 1
console.log(employee.getName()); // Jack
console.log(employee.getSalary()); // 1000

// Manager
var Manager = function (params) {
  // "Apply" execute the (Employee) function inside <this> (Manager) context with the passed <arguments>
  // This is valid only for the constructor function, not for the other prototype function
  Employee.apply(this, arguments);
};

// 1 - Get all method from (Employee)
// With "Object.create" we can transfer all the prototype function of (Employee) to (Manager)
Manager.prototype = Object.create(Employee.prototype);

// 2 - Override constructor back to our (Manager)
// The line above override the constructor of (Manager) with the (Employee) constructor
// So we have to override again the (Manager) constructor with the original constructor
Manager.prototype.constructor = Manager;

Manager.prototype.setDepartment = function (department) {
  this.department = department;
};

Manager.prototype.getDepartment = function () {
  return this.department;
};

const manager = new Manager(2, "John");
manager.setDepartment("Development");
console.log(manager); // { "id": 2, "name": "John", "department": "Development" }
console.log(manager.getDepartment()); // Development
