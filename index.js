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
        choices: ['Lisence', 'Code Coverage'] 
     }
  ])
  .then(function(answers)  {
      console.log('This is frist answer!!!', answers); 

    var badgeUrl = ''
    if(answers.badges === 'Lisence') {
      badgeUrl = '[![Build Status](https://travis-ci.com/username/projectname.svg?branch=master)](https://travis-ci.com/username/projectname)'
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


