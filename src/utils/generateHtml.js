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

module.exports = generateHtml;
