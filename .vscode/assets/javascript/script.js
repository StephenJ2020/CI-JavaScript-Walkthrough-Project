// Wait for the DOM to finish loading before running the game
// Get the button elements and add Event Listeners to them

document.addEventListener('DOMContentLoaded', function(){
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons){
        button.addEventListener('click', function(){
            if (this.getAttribute('data-type') === 'submit'){
                checkAnswer(); // Was alert('You clicked submit'); but changed to checkAnswer() function whch doesn't require any paramenters
            } else {
                let gameType = this.getAttribute('data-type');
                runGame(gameType);
            }
        })
    }

    runGame('addition');
})

// The main game "loop", called when the script is first loaded
// and after the user's answer has been processed

function runGame(gameType){

    // Generate two random numbers between 1 and 25
    // Math.floor rounds the number down to a whole number
    // Math.random generates random numbers between 0 and 1

    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === 'addition'){
        displayAdditionQuestion(num1, num2);
    } else if (gameType === 'multiply'){
        displayMultiplyQuestion(num1, num2);
    } else if (gameType === 'subtract'){
        displaySubractQuestion(num1, num2);
    } else {
        alert(`Unknown Game Type ${gameType}`);  // Note use of back ticks for template literal
        throw `Unknown Game Type ${gameType}, aborting!`;
    }

}

// Called when the user clicks the Submit button or presses Enter

function checkAnswer(){

    // Checks the answer against the first element in
    // the returned calculatecorrectAnswer Array

    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert('Hey, you got it right! :D');
        incrementScore();
    } else {
        alert(`awwww..... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);

}

function calculateCorrectAnswer(){

    // Gets the operands (Numbers) and the operator (plus, minus, etc)
    // directly from the DOM

    let operand1 = parseInt(document.getElementById('operand1').innerHTML);
    let operand2 = parseInt(document.getElementById('operand2').innerHTML);
    let operator = document.getElementById('operator').innerHTML;

    if (operator === '+'){
        return [operand1 + operand2, 'addition'];
    } else if (operator === 'x'){
        return[operand1 * operand2, 'multiply'];
    } else if (operator === '-'){
        return[operand1 - operand2, 'subtract'];
    } else {
        alert(`Unimplemented operator ${operator}`);  // note use of back ticks for template literal
        throw `Unimplemented operator ${operator}, aborting!`;  // throws an error to the console window
    }

}

function incrementScore(){

    // Gets the current score from the DOM and increments it

    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore;

}

function incrementWrongAnswer(){

    // Gets the current tally of Incorrect Answers from the DOM and increments it

    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++oldScore;

}

// Displays the questions.

function displayAdditionQuestion(operand1, operand2){

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';

}

function displaySubractQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;  // ternary operator - similar to if statement but shorter
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = '-';
}

function displayMultiplyQuestion(operand1, operand2){

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = 'x';

}