let startButton = document.getElementById("btn-start");
let inputGroup = document.getElementById("input-group");
let buttonsContainer = document.getElementById("buttons-container");

function createInput() {
    inputGroup.classList.remove("visually-hidden");
    startButton.classList.add("visually-hidden");
}

function generateButtons() {
    let input = document.getElementById("input-text").value;
    let numberOfButtons = parseInt(input);
    let alertText = document.getElementById("alert-text");

    if (isNaN(numberOfButtons)) {
        alertText.classList.remove("visually-hidden");
        return;
    } else if (!alertText.classList.contains("visually-hidden")) {
        alertText.classList.add("visually-hidden");
    }

    buttonsContainer.innerHTML = '';

    for (let buttonIndex = 0; buttonIndex < numberOfButtons; ++buttonIndex) {
        let button = document.createElement('button');
        button.classList.add('btn', 'btn-info', 'p-4', 'm-3', 'rounded-circle', 'btn-xl');
        buttonsContainer.appendChild(button);
    }

    startGame();
}

let wrongTries = 0;
function startGame() {
    
}