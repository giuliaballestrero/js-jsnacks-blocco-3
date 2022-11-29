/**
 *
 * Crea una funzione che dato un array, calcoli la somma dei suoi elementi.
 *
 */



function getSumOfArrayElements(array) {
    
    let sum = 0;

    for (let i = 0; i < lista.length; i++) {

        const element = parseInt (array[i], 10);
        sum = sum + element;

        }
    
    return sum;

}

const lista = ['1', '5', '4'];

console.log(getSumOfArrayElements(lista))