// dependencies
const inquirer = require("inquirer");
const fs = require("fs");

// import all the classes
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

// add the questions
const teamQuestions = [
  {
    type: "input",
    name: "teamName",
    message: "Enter your team name?",
  },
];

const managerQuestions = [
  {
    name: "name",
    type: "input",
    message: "Please enter the manager's name.",
  },
  {
    name: "id",
    type: "input",
    message: "Please enter the manager's ID.",
  },
  {
    name: "email",
    type: "input",
    message: "Please enter the manager's email.",
  },
  {
    name: "officeNum",
    type: "input",
    message: "Please enter the manager's Office Number.",
  },
];

const differentRoleQuestion = [
  {
    name: "differentRole",
    type: "list",
    message: "Select a team member you would like to add next?",
    choices: [
      {
        name: "Engineer",
        value: "engineer",
      },
      {
        name: "Intern",
        value: "intern",
      },
      {
        name: "None",
        value: "None",
      },
    ],
  },
];

const engineerQuestions = [
  {
    name: "name",
    type: "input",
    message: "Please enter the Engineer's name.",
  },
  {
    name: "id",
    type: "input",
    message: "Please enter the Engineer's ID.",
  },
  {
    name: "email",
    type: "input",
    message: "Please enter the Engineer's email.",
  },
  {
    name: "github",
    type: "input",
    message: "Please enter the Engineer's Github.",
  },
];

const internQuestions = [
  {
    name: "name",
    type: "input",
    message: "Please enter the Intern's name.",
  },
  {
    name: "id",
    type: "input",
    message: "Please enter the Intern's ID.",
  },
  {
    name: "email",
    type: "input",
    message: "Please enter the Intern's email.",
  },
  {
    name: "school",
    type: "input",
    message: "Please enter the Intern's school.",
  },
];

const init = async () => {
  console.log("Application");
};
init();
