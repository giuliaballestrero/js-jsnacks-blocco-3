
/** // Crea due array che hanno un numero di elementi diversi.
 * Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.
*/

const lista1 = ['paperella', 'cane', 'gatto', 'pesce'];
const lista2 = ['blu', 'verde'];
console.log(lista1, lista2);


while (lista1.length !== lista2.length) {

    if (lista1.length > lista2.length)
    lista2.push("elemento");
    else
    lista1.push("elemento");
    
}

console.log(lista1, lista2);


