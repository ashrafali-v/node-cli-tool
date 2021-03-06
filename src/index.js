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
    //check wether the input string is valid or not
    if(userInput == '' || !isNaN(userInput) || userInput == null){
      console.log('Enter a avlid string as input');
      return false
    }
    //String to uppercase
    var upperCase = stringToUpperCase(userInput);
    process.stdout.write(upperCase + '\n');
    //String to alternate uppercase
    var alternateUpperCase = stringToAlternateUpperCase(userInput);
    process.stdout.write(alternateUpperCase+ '\n');
    //Create csv file with user input
    csvFileGenerator(userInput.split(),'out.csv');
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });