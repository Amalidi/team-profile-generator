const Engineer = require("./Engineer");

describe("Engineer", () => {
  const name = "Amal Idiris";
  const id = 63;
  const email = "A.idi12@outlook.com";
  const github = "Amalidi";
  const role = "Engineer";

  const testEngineer = new Engineer({ name, id, email, github });

  it("should return the expected name", () => {
    expect(testEngineer.getName()).toEqual(name);
  });

  it("should return the expected email", () => {
    expect(testEngineer.getEmail()).toEqual(email);
  });

  it("should return the expected id", () => {
    expect(testEngineer.getId()).toEqual(id);
  });

  it("Should return github linked account", () => {
    expect(testEngineer.getGithub()).toEqual(github);
  });

  it("should return the role of Engineer", () => {
    expect(testEngineer.getRole()).toEqual(role);
  });
});
