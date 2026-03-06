// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


//frasi palindrome: Angolo bar a Bologna
// anna


function isPalindroma (){
    //chiedo all'utente la parola
    const userWord = prompt('Inserisci una parola');
    
    // const userWord = 'anna'; //esempio

    //divido la parola in singole lettere
    const splitUserWord = userWord.split("");
    //roverscio l'ordine della stringa
    let reverseUserWord = splitUserWord.reverse();
    //riunisco le lettere per foramre una stringa in ordine contrartio
    let joinedUserWord = reverseUserWord.join('');
    //tolgo gli spazzi tra le parole
    let trimmedUserWord = joinedUserWord.replaceAll(' ', '');
    //imposto lowercase su tutte le lettere
    let lowerUserWord = trimmedUserWord.toLowerCase();


    // console.log(lowerUserWord);

    //se la parola dell'utente é uguale alla sua versione al contrario
    if (userWord === lowerUserWord){
        // allora é una frase palindroma
        console.log(userWord + ' é una frase palindroma');
    } else {
        // altrimenti no
        console.log(userWord + ' non é una frase palindroma');
    }
    // console.log(trimmedUserWord);

}

isPalindroma();













// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

