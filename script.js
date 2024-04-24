let startButton = document.getElementById('btn-start');
let inputGroup = document.getElementById('input-group');
let buttonsContainer = document.getElementById('buttons-container');
let endGameText = document.getElementById('text-end');

function createInput() {
    inputGroup.classList.remove('visually-hidden');
    startButton.classList.add('visually-hidden');
}

function generateButtons() {
    let input = document.getElementById('input-text').value;
    let numberOfButtons = parseInt(input);
    let alertText = document.getElementById('alert-text');

    if (isNaN(numberOfButtons)) {
        alertText.classList.remove('visually-hidden');
        return;
    }
    if (!alertText.classList.contains('visually-hidden')) {
        alertText.classList.add('visually-hidden');
    }

    buttonsContainer.innerHTML = ''; // the container must be emptied before generating the new buttons

    for (let buttonIndex = 0; buttonIndex < numberOfButtons; ++buttonIndex) {
        let button = document.createElement('button');
        button.classList.add('btn', 'btn-info', 'p-4', 'm-3', 'rounded-circle', 'btn-xl');
        buttonsContainer.appendChild(button);
    }

    startGame();
}

let wrongTries;
let correctButton;

function startGame() {
    let buttons = buttonsContainer.querySelectorAll('button');
    let numberOfButtons = buttons.length;
    let randomIndex = Math.floor(Math.random() * numberOfButtons);
    correctButton = buttons[randomIndex];

    buttons.forEach(button => {
        button.addEventListener('click', buttonClickHandler);
    });
    
    wrongTries = 0;
    endGameText.classList.add('visually-hidden');
}

function buttonClickHandler(event) {
    let clickedButton = event.target;
    clickedButton.classList.remove('btn-info');

    if (clickedButton === correctButton) {
        clickedButton.classList.add('btn-success');
        endGame();
    } else {
        clickedButton.classList.add('btn-danger');
        ++wrongTries;
    }
}

function endGame() {
    let buttons = buttonsContainer.querySelectorAll('button');
    let numberOfButtons = buttons.length;
    let score = numberOfButtons - wrongTries;
    endGameText.textContent = `Your score is ${score} out of ${numberOfButtons}`;
    endGameText.classList.remove('visually-hidden');
}