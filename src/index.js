var inquirer = require('inquirer');
const {stringToAlternateUpperCase} = require('./stringToAlternateUpperCase');
const {stringToUpperCase} = require('./stringToUpperCase');
const {csvFileGenerator} = require('./csvfilegenerator');

inquirer
  .prompt([
    {
        type:'input',
        name:'string',
        message:'Please enter the string :'
    }
  ])
  .then((answers) => {
    var userInput = answers.string;
    if(userInput == '' || !isNaN(userInput) || userInput == null){
      console.log('Enter a avlid string as input');
      return false
    }
    var upperCase = stringToUpperCase(userInput);
    process.stdout.write(upperCase + '\n');
    var alternateUpperCase = stringToAlternateUpperCase(userInput);
    process.stdout.write(alternateUpperCase+ '\n');
    csvFileGenerator(userInput.split(),'out.csv');
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });