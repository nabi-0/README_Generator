const fs = require('fs');
//const inquirer = require('inquirer');
//const axios =require('axios');


const inquirer = require('inquirer');
inquirer
  .prompt([ {
    /* Pass your questions in here */
     type: "input",
     message: "Enter GitHub username.",
     name: "username"
  }, {
      type: "input",
      message:"Enter your valid email:",
      name: "email"
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
         "MIT License",
         "ISC",
         "Mozilla Public License 2.0",
         "ApacheLicense2.0" ],
     name: "license"
  }, {
      test: "input",
      message: "Provide tests for your application:",
      name: "test"
  }, {
      type: "input",
      message: "Enter any questions:",
      name: "questions"
  }])
  .then(answers => {
    // Use user feedback for... whatever!!
    // let licenseBadge = "";
    // if (answers.license === "MIT License"){
    //     licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    // }
    // if (answers.license === "ISC"){
    //     licenseBadge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
    // }
    // if (answers.license === "Mozilla Public License 2.0"){
    //     licenseBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    // }
    // if (answers.license === "Apache License 2.0"){
    //     licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    // }
    
let md = 
`# ${answers.title}


## Description

${answers.discription}


## Table of Contents (Optional)

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* ${answers.content}

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


## Questions

${answers.questions}

Send me an email at: ${answers.email} with any additinal question.


---
© 2020 Natalia Arias Inc. brand. All Rights Reserved.
    `;
    fs.writeFile("README1.md", md, (error) => {
        if (error) throw error;
        console.log("README1.md has been written secessfully...")
    });
  })
  .catch(error => {
    //if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    //} else {
      // Something else went wrong
      console.log(error);
    //}
  });
