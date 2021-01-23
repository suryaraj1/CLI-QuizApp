const chalk = require('chalk');
const emoji = require('node-emoji');

let startTime, finishTime;

const begin = () => startTime = new Date();

const end = () => {
  finishTime = new Date();
  let delta = (finishTime - startTime);
  delta /= 1000;
  console.log(`${emoji.get('watch')} Elapsed time: ${chalk.greenBright(delta)} seconds`);
}

module.exports = { begin, end };