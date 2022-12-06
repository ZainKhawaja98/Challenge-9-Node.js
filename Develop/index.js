// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        message: 'What is the title of this project?',      
        name: 'title',
    },
    {
        type: 'input',
        message: 'Give a description about this project.',      
        name: 'description',
    },
    {
        type: 'input',
        message: 'What needs to be installed for this project?',      
        name: 'install',
    },
    {
        type: 'input',
        message: 'How do you use this application?',      
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Who are all of the contributors for this project?',      
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'How do you test this project?',      
        name: 'testing',
    },
    {
        type: 'list',
        message: 'Pick the license for this project',      
        name: 'license',
        choices: ["MIT", "Apache 2.0", "GPL v3.0", "None"]
    },
    {
        type: 'input',
        message: 'What is your github username?',      
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',      
        name: 'email',
    }
];    

// TODO: Create a function to write README file
function writeToFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile("./output/README.md", data, (err) => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: "Created file",
            });
        });
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (response) {
            console.log(response);
            var fileContent = generateMarkdown(response);
            writeToFile(fileContent)
        })
}

// Function call to initialize app
init();
