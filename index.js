const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const inquirer = require("inquirer");

const teamArray = [];

const addManager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Who is the manager",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the manager's ID.",
        validate: (answer) => {
          if (answer !== "") {
            return false;
          }
          return "Please enter at least one character.";
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the manager's email.",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        },
      },
    ])
    .then((managerInput) => {
      const { name, id, email, officeNumber } = managerInput;
      const manager = new Manager(name, id, email, officeNumber);

      teamArray.push(manager);
      console.log(manager);
    });
};

const addEmployee = () => {
  console.log(`
    `);

  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Select your employee's role?",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "What's the name of the employee?",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the employee's ID.",
        validate: (answer) => {
          if (answer !== "") {
            return false;
          }
          return "Please enter at least one character.";
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the employee's email.",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        },
      },
      {
        type: "input",
        name: "github",
        message: "Please enter the employee's github username.",
        when: (input) => input.role === "Engineer",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        },
      },
      {
        type: "input",
        name: "school",
        message: "Please enter name of the intern's school",
        when: (input) => input.role === "Intern",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        },
      },
      {
        type: "confirm",
        name: "confirmAddEmployee",
        message: "Would you like to add more team members?",
        default: false,
      },
    ])
    .then((employeeData) => {
      let { name, id, email, role, github, school, confirmAddEmployee } =
        employeeData;
      let employee;

      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);

        console.log(employee);
      } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);

        console.log(employee);
      }

      teamArray.push(employee);

      if (confirmAddEmployee) {
        return addEmployee(teamArray);
      } else {
        return teamArray;
      }
    });
};

const writeFile = (data) => {
  fs.writeFile("./dist/index.html", data, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
    }
  });
};

addManager()
  .then(addEmployee)
  .then((teamArray) => {
    return generateHTML(teamArray);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .catch((err) => {
    console.log(err);
  });
