const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('.utils/generateMarkdown');



const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project.'
    },
    {
        type: 'list',
        name: 'license',
        choices: [
            "Apache License 2.0",
            "GNU GPLv3",
            "MIT",
            "ISC",
            "GNU GPLv2"
        ]
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Any guidelinees for contributors?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What tests should be run on this project?'
    }

];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data)
}

function init() {
    inquirer.prompt(questions).then(data => {
        writeToFile('README.md', generateMarkdown(data))
    });
}

init();
