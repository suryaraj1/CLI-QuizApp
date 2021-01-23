/* contains the CLI-Design for the greeting message */

const emoji = require('node-emoji');
const chalk = require('chalk');
const readlineSync = require('readline-sync');

const welcomeMessage = () => {
    const userName = readlineSync.question("Hello there! Please enter your name..\n");
    console.log(chalk.green(`Hello ${userName}, welcome to the Quiz!` + emoji.get('fire')));
    console.log();
    console.log("------------------------------------------------------");
    console.log("******************************************************");
    console.log("               _____________________                   ");
    console.log("              |                     |                  ");
    console.log("              | Welcome to CLI-QUIZ |                  ");
    console.log("              |_____________________|                  ");
    console.log();
    console.log("  A CLI Quiz app for budding JavaScript programmers   ");
    console.log(`            Made with ${emoji.get('heart')}  and ${chalk.green('JavaScript')}               `);
    console.log();
    console.log("******************************************************");
    console.log("------------------------------------------------------");
}

module.exports = { welcomeMessage };