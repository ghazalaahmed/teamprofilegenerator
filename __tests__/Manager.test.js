const Manager = require("../lib/Manager");

const testObject = {
  name: "Jared",
  id: 1,
  email: "jared@fakemail.com",
  officeNumber: "1",
};

test("creates an Manager object", () => {
  const manager = new Manager(testObject);
  expect(manager.officeNumber).toEqual(expect.any(String));
});

test("gets role of manager", () => {
  const manager = new Manager(testObject);
  expect(manager.getRole()).toEqual("Manager");
});
