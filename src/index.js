// dependencies
const inquirer = require("inquirer");
const fs = require("fs");

// import all the classes
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const generateHtml = require("./utils/generateHtml");
const getAnswers = require("./utils/getAnswers");
const writeToFile = require("./utils/writeToFile");

// ask the file and team name
const teamQuestions = [
  {
    type: "input",
    name: "teamName",
    message: "Enter your team name?",
  },
  {
    type: "input",
    name: "fileName",
    message: "Enter a name for your HTML file?",
  },
];

// questions for the manager
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

// an option to select a different employee
const employeeTypeQuestion = [
  {
    name: "employeeType",
    type: "list",
    message: "Select a team member you would like to add next?",
    choices: [
      {
        Key: "Engineer",
        value: "engineer",
      },
      {
        Key: "Intern",
        value: "intern",
      },
      {
        Key: "None",
        value: "None",
      },
    ],
  },
];

// questions for the engineer
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

// questions for the intern
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

const getAllTeamMembers = async () => {
  // team object array
  const teamMembers = [];

  let loopVariable = true;
  while (loopVariable) {
    // OPTION QUESTION presented and ON LOOP CHECK
    const { employeeType } = await getAnswers(employeeTypeQuestion);

    // using if statement
    if (employeeType === "engineer") {
      // start the engineer question
      const CreateEngineer = await getAnswers(engineerQuestions);
      const engineer = new Engineer(CreateEngineer);
      // save it in an array
      teamMembers.push(engineer);

      // start the intern questions
    } else if (employeeType === "intern") {
      const createIntern = await getAnswers(internQuestions);
      const intern = new Intern(createIntern);
      // save it in an array
      teamMembers.push(intern);
    } else {
      loopVariable = false;
    }
  }
  return teamMembers;
};

// main function to start
const init = async () => {
  console.log("Application");

  // ask for file and team name
  const { teamName, fileName } = await getAnswers(teamQuestions);

  // start the manager questions
  const CreateManger = await getAnswers(managerQuestions);
  const manager = new Manager(CreateManger);

  const allTeamMembers = await getAllTeamMembers();
  // console.log({ teamName, fileName, manager, allTeamMembers });

  // generated HTML file
  const newHtmlPage = generateHtml({
    fileName,
    teamName,
    manager,
    allTeamMembers,
  });

  // HTML file rendered
  writeToFile(fileName, newHtmlPage);
  console.log("Your html file has been created successfully");
};
init();
