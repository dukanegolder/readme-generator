

const inquirer = require('inquirer');
const fs = require('fs');

const generateReadMe = ({ title, description, name, installation, usage, contributors, test, questions, license }) =>

`# ${title}

## Description
${description}

## Table of Contents 
${name}


## Installation
${installation}


## Usage
${usage}


## Contributors
${contributors}


## Questions
${questions}

## License
${license}


## Tests
${test}`;

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
        type: 'input',
        name: 'questions',
        message: 'Please enter your GitHub username!',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which licesnse would you like to use',
      choices: ['MIT', 'Apache License 2.0', 'Mozilla Public License 2.0']
      
    },
  ])
  .then((answers) => {
    const readMePage = generateReadMe(answers);

    fs.writeFile('README.md', readMePage, (err) =>
      err ? console.log(err) : console.log('Successfully created new README!')
    );
  });

  prompt()