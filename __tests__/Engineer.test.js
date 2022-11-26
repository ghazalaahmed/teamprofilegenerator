const Engineer = require("../lib/Engineer");

const testObject = {
  name: "Grace",
  id: 3,
  email: "grace@fakemail.com",
  github: "grace",
};

test("Checks for inherited Employee properties", () => {
  const engineer = new Engineer(testObject);
  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
});

test("Checks for github", () => {
  const engineer = new Engineer(testObject);
  expect(engineer.github).toEqual(expect.any(String));
});

test("Checks for office number", () => {
  const engineer = new Engineer(testObject);
  expect(engineer.getGithub()).toEqual(expect.any(String));
});

test("Gets Engineer role", () => {
  const engineer = new Engineer(testObject);
  expect(engineer.getRole()).toEqual("Engineer");
});
