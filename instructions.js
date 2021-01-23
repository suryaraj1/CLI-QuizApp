/* contains the CLI design of the instructions for the quiz */

const emoji = require('node-emoji');

const instructions = () => {

    for (let i = 0; i < 2; i++)
        console.log();

    console.log(" -------------------------------<< INSTRUCTIONS >>-----------------------------------------");
    console.log("|                                                                                          |");
    console.log(`| ${emoji.get('one')}  Here you would be presented with 5 questions related to programming contests          |`);
    console.log(`| ${emoji.get('two')}  Each question would have a statement                                                  |`);
    console.log(`| ${emoji.get('three')}  Each question would be accompanied with 4 options, one of which is the correct option |`);
    console.log(`| ${emoji.get('four')}  Correct answer gives +10 points while incorrect answer fetches 0 points               |`);
    console.log("|                                                                                          |");
    console.log(" ------------------------------------------------------------------------------------------");

    for (let i = 0; i < 3; i++)
        console.log();
}

module.exports = { instructions };