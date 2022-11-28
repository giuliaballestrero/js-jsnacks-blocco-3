
/** Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando 
la somma degli elementi è minore di 50.
*/

const lista = [];
let somma = 0;

while (somma <=50) {
    let userNumber = parseInt (prompt ('Inserisci un numero'));
    somma += userNumber;
    lista.push(userNumber);

    if (somma > 50) {
        console.log('Somma maggiore a 50')
    }
}

console.log(somma);
console.log(lista);