const fs = require("fs");

const writeToFile = (fileName, generatedHTML) => {
  const dir = "./dist";
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, {
      recursive: true,
    });
  }

  const callback = (html) => {
    console.log("Your html file has been created successfully");
  };

  fs.writeFile(`./dist/${fileName}.html`, generatedHTML, callback);
};

// export the module
module.exports = writeToFile;
