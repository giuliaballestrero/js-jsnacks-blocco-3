/**
 * Crea due tag div con due id diversi.
 * Un div avrà il testo colorato di rosso mentre l'altro di verde.
 * Partendo da un array di numeri,
 * creiamo un nuovo elemento p e lo stampiamo nell'div rosso se è un numero dispari
 * e nel div verde se è un numero pari.
 *
 *
 */
 // funzione che crei un nuovo elemento <p> </p>
 // restituirlo a chi invoca la funzione
 //
 // ciclo per ogni elemento dell'array
 // se l'elemento è un numero pari, crei nuovo elemento e lo aggiungo al div verde
 // se l'elemento è un numero dispari, creo  nuovo elemento e lo aggiungo al div rosso


 const numbers = [1,33,55,64,33,22,10,44];

 function getnewElement (elementTag, content, classToAdd) {
    const newP = document.createElement(elementTag);
    newP.innerText = content;
    newP.classList.add(classToAdd);
    return newP;
 }

 const divEven = document.getElementById('box-green');
 const divOdd = document.getElementById('box-red');

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        divEven.appendChild(getnewElement('p', numbers[i], 'font-green'));
    } else {
        divOdd.appendChild(getnewElement('p', numbers[i], 'font-red'));
    }
}



