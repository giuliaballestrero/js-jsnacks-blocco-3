
// Continuare a chiedere all'utente un numero tra 1 e 10 fino a quando l'utente non inserisce il valore corretto

/**let userNumber = prompt ('Inserisci un numero da 1 a 10'); 

while ((userNumber > 10) || (userNumber < 1))  {
    userNumber = prompt ('Inserisci un numero da 1 a 10'); 
}
console.log(userNumber);
*/

/**
 * oppure
 * */

let userNumber;

do {
    userNumber = prompt ('Inserisci un numero da 1 a 10'); 
    }  while ((userNumber > 10) || (userNumber < 1));

    console.log(userNumber);