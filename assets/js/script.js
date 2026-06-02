document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                
            }
        });
    }
}
);

/**
    * The main game "loop", called when the script is first loaded and after the user answers the question
 */
function runGame(gameType) {
    // Generate two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
}


function checkAnswer({num1, num2, operator, gameType}) {

}

function calculateCorrectAnswer({num1, num2, operator}) {

}

function incrementScore() {
    
}

function incrementWrongAnswer() {
}

function displayAdditionQuestion({num1, num2, operator}) {

}

function displaySubtractQuestion({num1, num2, operator}) {
}

function displayMultiplyQuestion({num1, num2, operator}) {
}

function displayDivisionQuestion({num1, num2, operator}) {
}