// Design a class for employee which takes id and name in during construction of object and has a salary property

class Employee {
  constructor(id, name) {
    if (!id || !name) {
      throw new Error("Employee id and name are mandatory");
    }
    this.id = id;
    this.name = name;
  }

  setSalary(salary) {
    this.salary = salary;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getSalary() {
    return this.salary;
  }
}

const employee = new Employee(1, "Jack");
employee.setSalary(1000);
console.log(employee); // { "id": 1, "name": "Jack", "salary": 1000 }
console.log(employee.getId()); // 1
console.log(employee.getName()); // Jack
console.log(employee.getSalary()); // 1000

//
// Design a class for manager which is employee and can have department property

class Manager extends Employee {
  setDepartment(department) {
    this.department = department;
  }

  getDepartment() {
    return this.department;
  }
}

const manager = new Manager(2, "John");
manager.setDepartment("Development");
console.log(manager); // { "id": 2, "name": "John", "department": "Development" }
console.log(manager.getDepartment()); // Development
