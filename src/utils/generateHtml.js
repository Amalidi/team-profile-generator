const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

const generateHtml = (manager, engineer, intern) => {
  return `<!DOCTYPE html>
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
          <i class="fas fa-users px-4"></i>Test Team
        </h1>
      </header>
      <div class="mt-5 m-3 d-flex justify-content-around flex-wrap">
        <div class="card m-2 shadow mb-5 bg-body rounded">
          <div class="body-title card-header text-center text-light">
            <i class="fas fa-user-alt fa-2x pt-2"></i>
            <h3 class="p-2">Manager</h3>
          </div>
          <div class="card-body">
            <h4 class="card-title text-center pb-3 pt-2">Nikola Tesla</h4>
            <ul class="list-group mx-3 mb-3">
              <li class="list-group-item fw-bold">
                Employee ID: <span class="fw-normal">90879</span>
              </li>
              <li class="list-group-item fw-bold">
                Office Number: <span class="fw-normal">234</span>
              </li>
              <li class="list-group-item fw-bold">
                Email:
                <span class="fw-normal"
                  ><a href="mailto: A.idi12@outlook.com"
                    >NikolaTesla657@outlook.com</a
                  ></span
                >
              </li>
            </ul>
          </div>
        </div>
  
        <div class="card m-2 shadow mb-5 bg-body rounded">
          <div class="body-title2 card-header text-center text-light">
            <i class="fas fa-laptop-code fa-2x pt-2"></i>
            <h3 class="p-2">Engineer</h3>
          </div>
          <div class="card-body">
            <h4 class="card-title text-center pb-3 pt-2">Bill Gates</h4>
            <ul class="list-group mx-3 mb-3">
              <li class="list-group-item fw-bold">
                Employee ID: <span class="fw-normal">00987</span>
              </li>
              <li class="list-group-item fw-bold">
                GitHub:
                <span class="fw-normal"
                  ><a href="https://www.github.com/bill-gates" target="_blank"
                    >bill-gates</a
                  ></span
                >
              </li>
              <li class="list-group-item fw-bold">
                Email:
                <span class="fw-normal"
                  ><a href="mailto: BillGates111@outlook.com"
                    >BillGates111@outlook.com</a
                  ></span
                >
              </li>
            </ul>
          </div>
        </div>
  
        <div class="card m-2 shadow mb-5 bg-body rounded">
          <div class="body-title3 card-header text-center text-light">
            <i class="fas fa-user-graduate fa-2x pt-2"></i>
            <h3 class="p-2">Intern</h3>
          </div>
          <div class="card-body">
            <h4 class="card-title text-center pb-3 pt-2">Jeff Bezos</h4>
            <ul class="list-group mx-3 mb-3">
              <li class="list-group-item fw-bold">
                Employee ID: <span class="fw-normal">87665</span>
              </li>
              <li class="list-group-item fw-bold">
                School: <span class="fw-normal">University of Birmingham</span>
              </li>
              <li class="list-group-item fw-bold">
                Email:
                <span class="fw-normal"
                  ><a href="mailto: intern@test.co"
                    >JeffBezosn87@outlook.com</a
                  ></span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </body>
  </html>  
  `;
};

module.exports = generateHtml;
