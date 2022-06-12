const Employee = require("../lib/Employee");

describe("Employee class", () => {
  const mockAnswers = {
    name: "Natasha",
    employeeID: "54",
    email: "natasha@test.com",
  };
  describe("Constructor tests", () => {
    it("should create an instance of an Employee object", () => {
      const actual = new Employee(mockAnswers);

      expect(actual).toBeInstanceOf(Employee);
    });

    it("set the data properties in the constructor function", () => {
      const actual = new Employee(mockAnswers);

      expect(actual.name).toEqual("Natasha");
      expect(actual.employeeID).toEqual("54");
      expect(actual.email).toEqual("natasha@test.com");
    });
  });

  describe("Method tests", () => {
    it("should get the value of name", () => {
      const employee = new Employee(mockAnswers);
      const actual = employee.getName();

      expect(actual).toEqual(employee.name);
    });

    it("should get the ID of the employee", () => {
      const employee = new Employee(mockAnswers);
      const actual = employee.getEmployeeID();

      expect(actual).toEqual(employee.employeeID);
    });

    it("should get the email of the employee", () => {
      const employee = new Employee(mockAnswers);
      const actual = employee.getEmail();

      expect(actual).toEqual(employee.email);
    });

    it("should get the role of the employee", () => {
      const employee = new Employee(mockAnswers);
      const actual = employee.getRole();

      expect(actual).toEqual("Employee");
    });
  });
});

//require Employee //Employee constructor
const Employee = require("../lib/Employee");

//instance of employee
const instance = new Employee({
  name: "Rukhsana Wasiak",
  id: "12345678",
  email: "ruksclone@hotmail.com",
});

//return the expected role
describe("Employee", () => {
  test("should be an instance of Employee", () => {
    const expected = "Employee";
    const actual = instance.getRole();
  });
  //get the name
  test("should return the expected name", () => {
    const expected = "Rukhsana Wasiak";
    const actual = instance.getName();

    expect(actual).toEqual(expected);
  });

  //get the id
  test("should return the expected id", () => {
    const expected = "06111983";
    const actual = instance.getId();

    expect(actual).toEqual(expected);
  });

  //get the email
  test("should return the expected email", () => {
    const expected = "ruksclone@hotmail.com";
    const actual = instance.getEmail();

    expect(actual).toEqual(expected);
  });
});
