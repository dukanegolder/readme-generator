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

function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://opensource.org/license/mit-0/";
    case "Apache License 2.0":
      return "https://opensource.org/license/apache2-0-php/";
    case "Mozilla Public License 2.0":
      return "https://opensource.org/license/mpl-2-0/";
    default:
      return "";
  }
}

function renderLicenseSection(license) {
  var sectionStart = `\n## License\n`;
  var sectionEnd = `\n`;
  switch (license) {
    case "MIT":
      return (
        sectionStart + `MIT License ${renderLicenseLink(license)}` + sectionEnd
      );
    case "Apache License 2.0":
      return (
        sectionStart +
        `Apache License 2.0 ${renderLicenseLink(license)}` +
        sectionEnd
      );
    case "Mozilla Public License 2.0":
      return (
        sectionStart +
        `Mozilla Public License 2.0 ${renderLicenseLink(license)}` +
        sectionEnd
      );
    default:
      return "";
  }
}

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
${renderLicenseSection(license)}

## Contributors
${contributors}


## Tests
${test}


## Questions
${github}
${questions}`;
}

module.exports = generateMarkdown;
