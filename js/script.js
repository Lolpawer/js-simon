function generateNumbers (min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

function hide () {
    numberOutput.classList.add('hide');
}

function simonSays () {
    let userInput = document.getElementById('prompt');
    for (let i = 0; i < 5; i++) {
        userInput = parseInt(prompt("Inserisci un numero."));
        if (numberArray.includes(userInput)) {
            score.push(userInput);
        }
        let scoreOutput = document.getElementById('score');
        scoreOutput.innerHTML = `Hai ottenuto ${score.length} punto/i.</br>`
        let x = 0;
        while (score.length > x) {
            scoreOutput.innerHTML += `Numeri indovinati: </br>`;
            for (x = 0; x < score.length; x++) {
                scoreOutput.innerHTML += `${score[x]}</br>`;
            }
        }
    }
}

const numberOutput = document.getElementById('simon-says');
let numberArray = [];
let score = [];

while (numberArray.length < 5) {
    let number = generateNumbers(1, 9999);
    if (!numberArray.includes(number)) {
        numberArray.push(number);
        numberOutput.innerHTML += `${number} <br/>`;
    }
}

setTimeout (hide, 30000);
setTimeout (simonSays, 30100);