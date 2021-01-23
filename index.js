const chalk = require('chalk');
const emoji = require('node-emoji');
const readLineSync = require('readline-sync');
const { instructions } = require('./instructions');
const { welcomeMessage } = require('./greet');
const { begin, end } = require(`./timer`);

// score obtained by the user
let score = 0;
// total score for the quiz -> updates with new questions being added or removed
let totalScore = 0;
// bonus for a correct answer
const DELTA = 10;

const promptUser = () => {
    if (readLineSync.keyInYN(chalk.yellowBright('Press Y to continue else to exit the app...'))) {
        // seperate the first quiz question from this prompt to make it more readable
        console.log(); console.log();
    } else {
        console.log(`See you later...GoodBye ${emoji.get('rocket')}`);
        process.exit(1);
    }
}

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

    printResult() {
        begin();
        this.userResponse = readLineSync.questionInt("Enter the correct option ----> \n");
        if (this.checkResponse()) {
            console.log(chalk.green("Correct Answer!!"));
            score += DELTA;
        } else {
            const correctIndex = this.correctOption - 1;
            console.log(chalk.red("Incorrect Answer!") + ` The correct answer is ${chalk.green(this.options[correctIndex])}`);
        }
        end();
        console.log();
    }
}

const quizStatements = [];

const addQuestion = (prompt, firstOption, secondOption, thirdOption, fourthOption, correctOption) => {
    quizStatements.push(new Question(prompt, firstOption, secondOption, thirdOption, fourthOption, correctOption));
    totalScore += DELTA;
}

const removeQuestion = (idx) => {
    idx -= 1;
    quizStatements.splice(idx, 1);
    totalScore -= DELTA;
}

const setupQuizApp = () => {
    // add / remove questions here
    addQuestion("What kind of a language is JavaScript?", "Statically Typed", "Strongly Typed", "Weakly Typed", "Dynamically Typed", 3);

    addQuestion("What type of variables cannot be reassigned in JS?", "const", "var", "let", "none of these", 1);

    addQuestion("Which of the following contains invalid primitive data types?", "boolean, undefined", "integer, float", "string, number", "number, boolean", 2);

    addQuestion("What is the builtin attributes in JavaScript to return the length of a string?", "length", "size", "index", "none of these", 1);

    addQuestion("Which of the following methods is used to check if a key exists in an object in JS?", "hasOwnKey()", "hasOwnProperty()", "hasOwnValue()", "includes()", 2);
}

const printScore = () => {
    console.log();
    console.log("***************************************************************************");
    if (score === totalScore) {
        console.log(` Wohooo!!!! Way to go!  Your Score: ${score} / ${totalScore} ${emoji.get('fire')}`);
    } else if (score > 0) {
        console.log(` Good Job!! Your Score: ${score} / ${totalScore} ${emoji.get('star')}`);
    } else {
        console.log(` You should give it another try :) Your Score: ${score} / ${totalScore}`);
    }
    console.log("****************************************************************************");
}

const runQuizApp = () => {
    setupQuizApp();
    welcomeMessage();
    instructions();
    promptUser();

    // loops over all questions, displays them and finds the result
    quizStatements.forEach((item) => {
        item.printQuestion();
        item.printResult();
    })

    // post game print the score to the user
    printScore();
}

runQuizApp();
