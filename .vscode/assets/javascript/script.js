// Wait for the DOM to finish loading before running the game
// Get the button elements and add Event Listeners to them

document.addEventListener('DOMContentLoaded', function(){
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons){
        button.addEventListener('click', function(){
            if (this.getAttribute('data-type') === 'submit'){
                alert('You clicked submit');
            } else {
                let gameType = this.getAttribute('data-type');
                alert(`You clicked ${gameType}`);     // Notice that we're using a template literal here so these are back quotes in the alert rather than apostrophes!
            }
        })
    }
})

// The main game "loop", called when the script is first loaded
// and after the user's answer has been processed

function runGame(){

    // Generate two random numbers between 1 and 25
    // Math.floor rounds the number down to a whole number
    // Math.random generates random numbers between 0 and 1

    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

}

// Called when the user clicks the Submit button or presses Enter

function checkAnswer(){

}

function calculateCorrectAnswer(){

}

function incrementScore(){

}

function incrementWrongAnswer(){

}

// Displays the questions.

function displayAdditionQuestion(){

}

function displaySubractQuestion(){

}

function displayMultiplyQuestion(){

}