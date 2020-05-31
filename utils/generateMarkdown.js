function generateMarkdown(data) {
  return `
# ${data.title}


## Description
${data.description}

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

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

## Questions

[![My Profile Photo](https://github.com/nbkim89.png)](https://github.com/nbkim89)
${userEmail}

`;
}

module.exports = generateMarkdown;
