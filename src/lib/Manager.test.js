const Manager = require("../lib/Manager.js");

describe("Manager", () => {
  const name = "Amal Idiris";
  const id = 64;
  const email = "A.idi12@outlook.com";
  const officeNumber = "76878";
  const role = "Manager";

  const testManager = new Manager(name, id, email, officeNumber);

  it("Should return correct office number", () => {
    expect(testManager.officeNumber).toEqual(officeNumber);
  });

  it("should return the role of Manager", () => {
    expect(testManager.getRole()).toEqual(role);
  });

  it("should return the expected name", () => {
    expect(testManager.getName()).toEqual(name);
  });

  it("should return the expected email", () => {
    expect(testManager.getEmail()).toEqual(email);
  });

  it("should return the expected id", () => {
    expect(testManager.getId()).toEqual(id);
  });
});
