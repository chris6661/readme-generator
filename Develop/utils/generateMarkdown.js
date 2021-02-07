// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}
//data.license is choice, conditionals for what will be rendered return markdown, badges too
// TODO: Create a function to generate markdown for README
//callfunction from line 3 on line 23 in {} with $ so ${line 3 function}


//[MIT](https://choosealicense.com/licenses/mit/)

function generateMarkdown(data) {
  //will include ever qestion answer, refer to exercise 5 from 2/3
  return `# ${data.title}
  


 ## Table of Contents
 - [Description](#description)
 - [Installation](#installation)
 - [Usage](#usage)
 - [License](#license)
 - [Contributing](#contributing)
 - [Tests](#tests)
 - [Questions](#questions)

## Description
 ${data.description}

## Installation
 ${data.installation}

## Usage
 ${data.usage}

## License
 ${data.license}
 
 ## Contributing
 ${data.contributing}
 
 ## Tests
 ${data.tests}


 ${'Generated with ❤️'}
`;
}

module.exports = generateMarkdown;
