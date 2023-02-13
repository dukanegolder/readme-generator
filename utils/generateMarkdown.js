// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return `\n[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n`;
    case "Apache License 2.0":
      return `\n[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\n`;
    case "Mozilla Public License 2.0":
      return `\n[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)\n`;
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "MIT BADGE";
    case "Apache License 2.0":
      return "Apache Badge";
    case "Mozilla Public License 2.0":
      return "MOzo";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var sectionStart = `\n## License\n`;
  var sectionEnd = `\n`;
  switch (license) {
    case "MIT":
      return sectionStart + "" + sectionEnd;
    case "Apache License 2.0":
      return "";
    case "Mozilla Public License 2.0":
      return "";
    default:
      return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({
  title,
  description,
  installation,
  usage,
  contributors,
  test,
  questions,
  license,
  github,
}) {
  return `# ${title}
${renderLicenseBadge(license)}
## Description
${description}

## Table of Contents 

[Installation](#installation)\n
[Usage](#usage)\n
[Contributors](#contributors)\n
[Tests](#tests)\n
[License](#license)\n
[Questions](#questions)\n


## Installation
${installation}


## Usage
${usage}
${renderLicenseSection()}

## Contributors
${contributors}


## Tests
${test}


## Questions
${github}
${questions}`;
}

module.exports = generateMarkdown;
