const Intern = require("./Intern");

describe("Intern", () => {
  const name = "Amal Idiris";
  const id = 63;
  const email = "A.idi12@outlook.com";
  const school = "University of Birmingham";
  const role = "Intern";

  const testIntern = new Intern({ name, id, email, school });

  it("should return the expected id", () => {
    expect(testIntern.getId()).toEqual(id);
  });

  it("Should return the correct school", () => {
    expect(testIntern.getSchool()).toEqual(school);
  });

  it("should return the expected email", () => {
    expect(testIntern.getEmail()).toEqual(email);
  });

  it("should return the expected name", () => {
    expect(testIntern.getName()).toEqual(name);
  });

  it("should return the role of Intern", () => {
    expect(testIntern.getRole()).toEqual(role);
  });
});
