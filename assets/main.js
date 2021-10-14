





const utente = Math.floor(Math.random() * 6);
console.log(utente, "giocatore");
const computer = Math.floor(Math.random() * 6);
console.log(computer, "computer");
//gernera un numero random da 1 a 6 sia per il giocatore che per il coputer
/**/


//stabilisci il vincitore in base al punteggio più alto
/*if */
if (utente == computer) {
    console.log("pareggio");
} else if (utente < computer) {
    console.log("il vincitore è il computer");
} else {
    console.log("il vincitore è il giocatore");
}
