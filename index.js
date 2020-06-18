const fs = require('fs')
const inquirer = require('inquirer')
//const axios =require('axios')



var inquirer = require('inquirer');
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
     message: "List ypur collaborators:",
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
  }
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });