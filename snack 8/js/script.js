/**
 *
 * Data una lista di 20 numeri diversi.
 * generiamo una lista secondaria di
 * 10 numeri presi randomicamente dalla lista, diversi tra loro.
 *
 */

 const firstList = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
 const secondList = [];

 function getRandomNumbers (numMin, numMax) {
    if (numMin === numMax){
        return numMax;
      }

      return Math.floor ( Math.random() * (numMax - numMin + 1) + numMin);
    };

    let randomNumbers;

    while (secondList.length < 10) {
     randomNumbers = getRandomNumbers(1, firstList.length - 1);

     if (!secondList.includes(randomNumbers))
     secondList.push(randomNumbers);   
    }
    
    console.log(secondList);