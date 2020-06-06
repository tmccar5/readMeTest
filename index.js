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
        type:'input',
        name: 'second',
        message: 'Please give a brief Description!' 
     }
  ])
  .then(function(answers)  {
      console.log('This is frist answer!!!', answers); 

      var readMeString = `
# Title ${answers.first}
# Description ${answers.second}
        asdfasd
      `

      

      fs.writeFile('readMe.md',readMeString , function (err) {
        if (err) throw err;
        console.log('Saved!');
      });

  })


