// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '![LICENSE BADGE](https://img.shields.io/badge/license-MIT-brightgreen?style=for-the-badge)';
    case 'Apache 2.0':
      return '![LICENSE BADGE](https://img.shields.io/badge/license-Apache%20License%202.0-brightgreen?style=for-the-badge)'
    case 'GPL v3.0':
      return '![LICENSE BADGE](https://img.shields.io/badge/license-GNU%20GPLv3-brightgreen?style=for-the-badge)';
    case 'None':
      return "no license"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return 'https://spdx.org/licenses/MIT.html';
    case 'Apache 2.0':
      return 'https://spdx.org/licenses/Apache-2.0.html';
    case 'GPL v3.0':
      return 'https://spdx.org/licenses/GPL-3.0-or-later.html';
    case 'None':
      return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {

    case 'MIT' :
      return `The license for this project is the <a href="https://opensource.org/licenses/MIT">MIT</a> license.`;
  
      case 'Apache':
        return `The license for this project is the <a href="https://opensource.org/licenses/Apache-2.0">Apache</a> license.`;
  
      case 'GPLv3' :
        return `The license for this project is the <a href="https://www.gnu.org/licenses/gpl-3.0">GPLv3</a>license.`;
  
      default:
        return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  * [Description](#description)
  * [License](#license)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Test](#test)
  * [Questions](#questions)
  
  ## Description
  ${data.description}
  ## License
  * The license for this application is ${renderLicenseLink(data.license)}.
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contributions}
  ## Test
  ${data.test}

  ## Questions:
  Any questions, comments, concerns, or feedback can be sent to me at ${data.email}
  My github repo can be found at https://github.com/${data.github}
`;
}

module.exports = generateMarkdown;
