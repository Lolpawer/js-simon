function generateNumbers (min, max) {
    return Math.round(Math.random() * (max - min)) + min;
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

