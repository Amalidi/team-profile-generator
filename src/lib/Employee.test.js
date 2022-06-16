const Employee = require("../lib/Employee.js");

describe("Employee", () => {
  const name = "Amal Idiris";
  const id = 63;
  const email = "A.idi12@outlook.com";
  const role = "Employee";

  const testEmployee = new Employee(name, id, email);

  it("should return the expected email", () => {
    expect(testEmployee.getEmail()).toEqual(email);
  });

  it("should return the expected id", () => {
    expect(testEmployee.getId()).toEqual(id);
  });

  it("should return the role of Intern", () => {
    expect(testEmployee.getRole()).toEqual(role);
  });

  it("should return the expected name", () => {
    expect(testEmployee.getName()).toEqual(name);
  });
});
