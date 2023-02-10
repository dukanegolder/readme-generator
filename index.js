

const inquirer = require('inquirer');
const fs = require('fs');

const generateReadMe = ({ title, description, name, installation, usage, contributors, test, questions, license, github }) =>

`# ${title}

## Description
${description}

## Table of Contents 
${name}


## Installation
${installation}


## Usage
${usage}


## License
${license}


## Contributors
${contributors}


## Tests
${test}


## Questions
${github, questions}`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the Title of the project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Give a quick descirption of your project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Is there any installation required for the project? If none type N/A.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is the usage for the project?',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Are there any contributors to the project? If none type N/A.',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the testing procedures? If none type N/A.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which licesnse would you like to use',
      choices: ['MIT', 'Apache License 2.0', 'Mozilla Public License 2.0']
      
    }, 
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub link!',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Please enter your email for users to reach out with questions!',
    },
  ])
  .then((answers) => {
    const readMePage = generateReadMe(answers);

    fs.writeFile('README.md', readMePage, (err) =>
      err ? console.log(err) : console.log('Successfully created new README!')
    );
  });
