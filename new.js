// // import chalk from 'chalk';
// // let chalk = require('chalk');

// console.log(chalk.bold('Hello world!'));
var figlet = require('figlet');

figlet('Hello World!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});