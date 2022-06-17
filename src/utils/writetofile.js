const fs = require("fs");

const path = require("path");

const generateHtml = require("./generateHtml");

const writeToFile = (fileName, generateHtml) => {
  const filePath = path.join(__dirname, `../../dist/${fileName}.html`);
  console.log(filePath);

  console.log("Your team profile file has been generated!");

  fs.writeFileSync(filePath, JSON.stringify(generateHtml));
};

// export the module
module.exports = writeToFile;
