
/** Prendere due array della stessa lunghezza e generarne un terzo, 
prendendo alternativamente gli elementi
 da uno e dall'altro es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
*/

const lista1 = ['a', 'b', 'c'];
const lista2 = ['1', '2', '3'];
const lista3 = [];

i= 0;

while (i < lista1.length) {

    lista3.push(lista1[i], lista2[i]);

    i++;
}

console.log(lista3);