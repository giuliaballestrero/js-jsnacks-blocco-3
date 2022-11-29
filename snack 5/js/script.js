
/**
 * Crea una funzione che accetti due argomenti, 
 * e che restituisca un valore numerico randomico 
 * tra i due argomenti inclusi.
 */


function getRandomNumber (numberMin, numberMax) {
    const randomNumber = Math.floor(Math.random() * (numberMax - numberMin) + numberMin);
    return randomNumber;
}

const number = getRandomNumber (5, 250);
console.log(number);