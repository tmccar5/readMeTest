var inquirer = require('inquirer');
var fs = require('fs');

require('dotenv').config()

console.log('Super sercert password!!', process.env.SUPER_PASSWORD)


inquirer.prompt([
    {
       type:'input',
       name: 'first',
       message: 'What is your project called ?' 
    },
    {
        type:'list',
        name: 'badges',
        message: 'which badge do u want ?',
        choices: ['MIT', 'Creative Commons'] 
     }
  ])
  .then(function(answers)  {
      console.log('This is frist answer!!!', answers); 

    var badgeUrl = ''
    if(answers.badges === 'MIT') {
      badgeUrl = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    } else  if (answers.badges === 'Creative Commons') {
      badgeUrl = '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'
    }


      var readMeString = `
# Title ${answers.first}
# Description ${answers.second}
${badgeUrl}
      `

      

      fs.writeFile('readMe.md',readMeString , function (err) {
        if (err) throw err;
        console.log('Saved!');
      });

  })


