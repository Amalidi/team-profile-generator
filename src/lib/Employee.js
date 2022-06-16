class Employee {
  constructor(name, getEmployeeID, email) {
    this.name = name;
    this.id = getEmployeeID;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getEmployeeID() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
