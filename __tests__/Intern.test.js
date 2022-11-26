const Intern = require("../lib/Intern");

const testObject = {
  name: "John",
  id: 2,
  email: "John@fakemail.com",
  school: "program",
};

test("creates an Intern object", () => {
  const intern = new Intern(testObject);
  expect(intern.school).toEqual(expect.any(String));
});

test("gets Intern school", () => {
  const intern = new Intern(testObject);
  expect(intern.getSchool()).toEqual(
    expect.stringContaining(intern.school.toString())
  );
});

test("gets role of Intern", () => {
  const intern = new Intern(testObject);
  expect(intern.getRole()).toEqual("Intern");
});
