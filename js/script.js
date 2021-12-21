function generateNumbers (min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

function hide () {
    numberOutput.classList.add('hide');
}

function simonSays () {
    let promptContainer = document.getElementById('prompt');
    for (let i = 0; i < 5; i++) {
        promptContainer = parseInt(prompt("Inserisci un numero."));
    }
}

const numberOutput = document.getElementById('simon-says');
let numberArray = [];

while (numberArray.length < 5) {
    let number = generateNumbers(1, 9999);
    if (!numberArray.includes(number)) {
        numberArray.push(number);
        numberOutput.innerHTML += `${number} <br/>`;
    }
}

setTimeout (hide, 5000);
setTimeout (simonSays, 5100);