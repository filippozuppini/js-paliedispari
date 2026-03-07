// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


//frasi palindrome: Angolo bar a Bologna
// anna


function isPalindroma (){
    //chiedo all'utente la parola
    //const userWord = 'Angolo bar a Bologna'; //test
    const userWord = prompt('Inserisci una parola');
    // console.log(userWord);
    
    // const userWord = 'anna'; //esempio
  
    //imposto lowercase su tutte le lettere
    let lowerUserWord = userWord.toLowerCase();
    // console.log(lowerUserWord);
    

    //tolgo gli spazzi tra le parole
    let trimmedUserWord = lowerUserWord.replaceAll(' ', '');
    // console.log(trimmedUserWord);
    
    //divido la parola in singole lettere
    const splitUserWord = trimmedUserWord.split("");
    // console.log(splitUserWord);
    
    //roverscio l'ordine della stringa
    let reverseUserWord = splitUserWord.reverse();
    // console.log(reverseUserWord);
    
    //riunisco le lettere per foramre una stringa in ordine contrartio
    let joinedUserWord = reverseUserWord.join('');
    // console.log(joinedUserWord + 'joined');
    


    //se la parola dell'utente é uguale alla sua versione al contrario
    if (joinedUserWord === trimmedUserWord){
        // allora é una frase palindroma
        console.log(userWord + ' é una frase palindroma');
    } else {
        // altrimenti no
        console.log(userWord + ' non é una frase palindroma');
    }
    // console.log(trimmedUserWord);

}

isPalindroma();





/*

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.







// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// const userPoD = prompt('Pari o Dispari?');
const userPoD = 'pari';

console.log(userPoD);

// const userNum = prompt('Inserisci il numero da 1 a 5');
const userNum = 2;

console.log(userNum);


// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function computerNum() {
    let randomNum = Math.floor((Math.random() * 5) + 1);
    console.log(randomNum); 
    
}
computerNum();

// Sommiamo i due numeri
let somma = computerNum + userNum;
console.log(somma);


// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function isPariOrDisapri(somma) {
    if (somma%2 === 0) {
        console.log('Il numero é pari');
    } else {
        console.log('Il numero é dispari');
        
    }
}

isPariOrDisapri(somma)


*/

