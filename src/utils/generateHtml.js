const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

const generateManagerCard = (manager) => {
  return `
        <div class="card m-2 shadow mb-5 bg-body rounded">
        <div class="body-title card-header text-center text-light">
          <i class="fas fa-user-alt fa-2x pt-2"></i>
          <h3 class="p-2">Manager</h3>
        </div>
        <div class="card-body">
          <h4 class="card-title text-center pb-3 pt-2">${manager.name}</h4>
          <ul class="list-group mx-3 mb-3">
            <li class="list-group-item fw-bold">
              Employee ID: <span class="fw-normal">${manager.id}</span>
            </li>
            <li class="list-group-item fw-bold">
              Office Number: <span class="fw-normal">${manager.getOfficeNumber()}</span>
            </li>
            <li class="list-group-item fw-bold">
              Email:
              <span class="fw-normal"
                ><a href="mailto: ${manager.email}"
                  >${manager.email}</a
                ></span
              >
            </li>
          </ul>
        </div>
      </div>`;
};

const generateEngineerCard = (allTeamMembers) => {
  return `
    <div class="card m-2 shadow mb-5 bg-body rounded">
    <div class="body-title2 card-header text-center text-light">
        <i class="fas fa-laptop-code fa-2x pt-2"></i>
        <h3 class="p-2">Engineer</h3>
    </div>
    <div class="card-body">
        <h4 class="card-title text-center pb-3 pt-2">${allTeamMembers.getName()}</h4>
        <ul class="list-group mx-3 mb-3">
        <li class="list-group-item fw-bold">
            Employee ID: <span class="fw-normal">${allTeamMembers.id}</span>
        </li>
        <li class="list-group-item fw-bold">
            GitHub:
            <span class="fw-normal"
            ><a href="https://www.github.com/${allTeamMembers.getGithub()}" target="_blank"
                >${allTeamMembers.github}</a
            ></span
            >
        </li>
        <li class="list-group-item fw-bold">
            Email:
            <span class="fw-normal"
            ><a href="mailto: ${allTeamMembers.email}"
                >${allTeamMembers.email}</a
            ></span
            >
        </li>
        </ul>
    </div>
    </div>`;
};

const generateInternCard = (allTeamMembers) => {
  return `
    <div class="card m-2 shadow mb-5 bg-body rounded">
    <div class="body-title3 card-header text-center text-light">
        <i class="fas fa-user-graduate fa-2x pt-2"></i>
        <h3 class="p-2">Intern</h3>
    </div>
    <div class="card-body">
        <h4 class="card-title text-center pb-3 pt-2">${allTeamMembers.name}</h4>
        <ul class="list-group mx-3 mb-3">
        <li class="list-group-item fw-bold">
            Employee ID: <span class="fw-normal">${allTeamMembers.id}</span>
        </li>
        <li class="list-group-item fw-bold">
            School: <span class="fw-normal">${allTeamMembers.school}</span>
        </li>
        <li class="list-group-item fw-bold">
            Email:
            <span class="fw-normal"
            ><a href="mailto: ${allTeamMembers.email}"
                >${allTeamMembers.email}</a
            ></span
            >
        </li>
        </ul>
    </div>
    </div>
    `;
};

const generateHtml = (teamName, manager, allTeamMembers) => {
  const managerCard = generateManagerCard(manager);

  const generateCard = (allTeamMembers) => {
    if (allTeamMembers instanceof Intern) {
      return generateInternCard(allTeamMembers);
    }
    if (allTeamMembers instanceof Engineer) {
      return generateEngineerCard(allTeamMembers);
    }
  };
  const teamCards = allTeamMembers.map(generateCard);

  const teamCardsGenerated = managerCard + teamCards.join("");

  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>My Team</title>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="./assets/style.css" />
      <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
  
    <body>
      <header class="mb-5 p-4 bg-info">
        <h1 class="text-center text-white">
          <i class="fas fa-users px-4"></i>${teamName}
        </h1>
      </header>
      <div class="mt-5 m-3 d-flex justify-content-around flex-wrap">
      ${teamCardsGenerated}
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8"
        crossorigin="anonymous"
      ></script>
    </body>
  </html>
  `;
};

module.exports = generateHtml;
