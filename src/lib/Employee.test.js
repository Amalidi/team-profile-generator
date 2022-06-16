const Employee = require("./Employee");

describe("testEmployee", () => {
  const name = "Amal Idiris";
  const employeeid = 63;
  const email = "A.idi12@outlook.com";
  const role = "Employee";

  const testEmployee = new Employee(name, employeeid, email);

  it("should return the expected name", () => {
    expect(testEmployee.getName()).toBe(name);
  });

  it("should return the expected id", () => {
    expect(testEmployee.getEmployeeID()).toBe(employeeid);
  });

  it("should return the expected email", () => {
    expect(testEmployee.getEmail()).toBe(email);
  });

  it("should return the role of Employee", () => {
    expect(testEmployee.getRole()).toBe(role);
  });
});
