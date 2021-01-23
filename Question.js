/* contains the question class */

const chalk = require('chalk');
const readLineSync = require('readline-sync');

class Question {
    constructor(query, option1, option2, option3, option4, correctOption) {
        this.quizQuestion = query;
        this.options = [];
        this.options[0] = option1;
        this.options[1] = option2;
        this.options[2] = option3;
        this.options[3] = option4;
        this.userResponse = "";
        this.correctOption = correctOption;
    }

    display() {
        console.log("Q: " + this.quizQuestion);
    }

    displayOptions() {
        console.log("Choose any one of the following options : ");
        this.options.forEach((option, optionIndex) => {
            console.log(`[${optionIndex + 1}] ${option}`);
        });
    }

    printQuestion() {
        this.display();
        console.log();
        this.displayOptions();
    }

    checkResponse() {
        return (this.userResponse === this.correctOption);
    }
}

module.exports = { Question };