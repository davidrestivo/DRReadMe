
// TODO: Create a function that returns a license badge based on which license is passed in
function generateMarkdown(userResponse, userInfo) {
    var licenseBadge = generateBadge(userResponse.license)
    var licenseUrl = generateLicenseUrl(userResponse.license)
    var result = (`# ${userResponse.title}
  \n![License](${licenseBadge} \n
  ${userResponse.description}
  \n## Table of Contents
  \n* [Installation](#Installation)
  \n* [Instructions](#Instructions)
  \n* [Contributors](#Contributors)
  \n* [Tests](#Tests)
  \n* [License](#License)
  \n* [Author](#Author)
  \n## Installation
  \n${userResponse.installation}
  \n## Usage
  \n${userResponse.usage}
  \n## Contributing
  \n${userResponse.contributing}
  \n## Tests
  \n${userResponse.tests}
  \n## License
  \nThis project is licensed under the ${userResponse.license} - see the [License](${licenseUrl}) page.
  \n## Author
  \n![ProfileImage](${userInfo.avatar_url})
  \n${userInfo.name}
  \nLocation: ${userInfo.location}
  \n[GitHub](${userInfo.html_url})`)
  
  
    return result ;
  }
  // TODO: Create a function that returns the license link
  function generateBadge(license) {
    let badge;
    
    switch (license) {
      case "GNU AGPLv3":
        badge = { name: "GNU+AGPLv3" };
        break;
      case "GNU GPLv3":
        badge = { name: "GNU+GPLv3"};
        break;
      case "GNU LGPLv3":
        badge = { name: "GNU+LGPLv3"};
        break;
      case "Mozilla Public License 2.0":
        badge = { name: "Mozilla+2.0"};
        break;
      case "Apache License 2.0":
        badge = { name: "Apache+2.0"};
        break;
      case "MIT License":
        badge = { name: "MIT"};
        break;
      case "Boost Software License 1.0":
        badge = { name: "Boost+Software+1.0"};
        break;
      case "The Unlicense":
        badge = { name: "The+Unlicense"};
        break;
    }
  
    return `https://img.shields.io/static/v1?label=license&message=${badge.name})`;
  }
  // TODO: Create a function that returns the license section of README
  function generateLicenseUrl(license) {
    let path;
    
    switch (license) {
      case "GNU AGPLv3":
        path = "agpl-3.0";
        break;
      case "GNU GPLv3":
        path = "gpl-3.0";
        break;
      case "GNU LGPLv3":
        path = "lgpl-3.0";
        break;
      case "Mozilla Public License 2.0":
        path = "mpl-2.0";
        break;
      case "Apache License 2.0":
        path = "apache-2.0";
        break;
      case "MIT License":
        path = "mit";
        break;
      case "Boost Software License 1.0":
        path = "bsl-1.0";
        break;
      case "The Unlicense":
        path = "unlicense";
        break;
    }
  
    return `https://choosealicense.com/licenses/${path}/`;
  }
  // TODO: Create a function to generate markdown for README
  
  module.exports = generateMarkdown;