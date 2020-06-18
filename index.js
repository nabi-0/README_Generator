const fs = require('fs')
const inquirer = require('inquirer')
//const axios =require('axios')



inquirer
  .prompt([ {
    /* Pass your questions in here */
     type: "input",
     message: "Enter GitHub username.",
     name: "username"
  }, {
     type: "input",
     message: "Enter the title of ypur project:",
     name: "title"
  }, {
      type: "input",
      message: "Enter a short description explaining your project:",
      name: "discription"
  }, {
     type: "input",
     message: "Add a table of contebts (optional):",
     name: "content"
  }, {
      type: "input",
      message: "Enter any steps required to install this project:",
      name: "installation"
  }, {
      type: "input",
      message: "Provide instructions for use:",
      name: "usage"
  }, {
     type: "input",
     message: "List your collaborators:",
     name: "credits"
  }, {
     type: "list",
     message: "Select a license:",
     choices: [
         "MIT",
         "GNU GPLv3",
         "Mozilla Public License 2.0",
         "ApacheLicense2.0" ],
     name: "license"
  }, {
      test: "input",
      message: "Provide tests for your application:",
      name: "test"
  }])
  .then(answers => {
    // Use user feedback for... whatever!!
    //const qURL = "https://"
    let md = `# ${answers.title}

## Description

${answers.discription}

## Table of Contents (Optional)

${answers.content}
    
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Instalation
    
${answers.installation}
    
## Usage
    
${answers.usage}
    
## Credits
    
${answers.username}
${answers.credits}
    
## License
    
${answers.license}
    
## Test
    
${answers.test}

---
© 2020 Natalia Arias Inc. brand. All Rights Reserved.
    `;
    fs.writeFile("README1.md", md, (err) => {
        if (err) throw err;
        console.log("README1.md has been written secessfully...")
    });
  })
  .catch(error => {
    //if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    //} else {
      // Something else when wrong
      console.log(err);
    //}
  });