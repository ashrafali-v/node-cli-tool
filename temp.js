var inquirer = require('inquirer');


inquirer
  .prompt([
    {
        type:'input',
        name:'string',
        message:'Please enter the string :'
    }
  ])
  .then((answers) => {
    process.stdout.write(answers.string.toUpperCase());
    process.stdout.write('\n');
    answers.string.split('').forEach((element,index) => {
        process.stdout.write(index%2 == 0?element.toUpperCase():element);
    });
    const fastcsv = require('fast-csv');
    const fs = require('fs');
    const ws = fs.createWriteStream("out.csv");
    const data = answers.string.split('');
    fastcsv.write(data, { headers: false }).pipe(ws);
    process.stdout.write('\n');
    process.stdout.write('CSV created');
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });