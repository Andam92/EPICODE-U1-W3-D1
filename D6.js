/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l2) {
  const superficie = l1 * l2;
  return superficie;
}
console.log(area(2, 3));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(int1, int2) {
  if (int1 === int2) {
    return (int1 + int2) * 3;
  } else {
    return int1 + int2;
  }
}
console.log(crazySum(6, 1));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(number) {
  if (number > 19) {
    return Math.abs(number - 19) * 3;
  } else {
    return Math.abs(number - 19);
  }
}
console.log(crazyDiff(10));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(n) {
  if ((n > 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
}
let n = 21;
console.log(boundary(n));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function epify(stringa) {
  if (stringa.split(` `)[0] === "EPICODE") {
    return stringa;
  } else {
    return "EPICODE" + stringa;
  }
}

console.log(epify(" ti da il benvenuto"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(positiveNum) {
  if (positiveNum % 3 === 0 || positiveNum % 7 === 0) {
    return positiveNum + " è un multiplo di 3 o di 7";
  } else {
    return positiveNum + " non è un multiplo di 3 o 7";
  }
}
let positiveNum = 356;
console.log(check3and7(positiveNum));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* function reverseString(string) {
  let stringSplit = string.split("");
  let reverseArray = stringSplit.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
}
console.log(reverseString("hello world")); */

function reverseString(string) {
  return string.split("").reverse().join("");
}
console.log(reverseString("adesso"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(phrase) {
  const stringSplit = phrase.split(" ");
  for (let i = 0; i < stringSplit.length; i++) {
    stringSplit[i] =
      stringSplit[i].charAt(0).toUpperCase() + stringSplit[i].substring(1);
    return stringSplit.join(" ");
  }
}
let upperedWords = upperFirst("stringa di diverse parole");
console.log(upperedWords);

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
