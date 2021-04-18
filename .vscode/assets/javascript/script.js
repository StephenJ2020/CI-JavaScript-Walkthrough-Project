// Wait for the DOM to finish loading before running the game
// Get the button elements and add Event Listeners to them

document.addEventListener('DOMContentLoad', function(){
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

function runGame(){

}

function checkAnswer(){

}

function calculateCorrectAnswer(){

}

function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(){

}

function displaySubractQuestion(){

}

function displayMultiplyQuestion(){

}