/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* Allora i pricipali datatype in JavaScript, ne troviamo 6 tipi diversi tra cui: Number, String, boolean , undefined, null, Biglnt e Symbol; ed ognuno di essi hanno diverse funzionalita.
    Il tipo NUMBER viene usato sia per i numeri interi che per i numeri in virgola, con i valori di tipo NUMBER si hanno diverse operazini a disposizione, tra cui * la moltiplicazione, / la divisione, + addizione, - sottrazione.
        Apparte i numeri appena elencati prima, ne esistono anche i "valori numerici speciali", che sono: Infinity, -Infinity e NaN. Infinity nella matematica rappresenta il numero infinito. Possiamo averlo sia tramite operazione (esempio facendo la divisione con 0), o lo possiamo anche inserire direttamente dentro a un codice.
        NaN invece rappresente un errore di calcolo.
    Il tipo String, una stringa in JavaScript deve essere tra apici, ne essistono 3 tipi 1. Apici doppi ("Rado"), 2. Apice singolo ('Rado') 3. Backtick (`Rado`).
    Il tipo Boolean, contiene solo due valori: true o false. Boolean viene usato per memorizzare valori; True (SI e coretto), false (NO, e scoretto)
    Il tipo null è solamente usato per indicare il valore, cioè: nullo, vuoto, o valore sconosciutto
    Il tipo undefinend è molto simile a null però infatti il suo significato e che il valore non è aseegnato. Se una variabile poniamo il caso venga dichiarata ma non assegnata, il suo valore e undefinend
    Il tipo Biglnt viene usato per rappresentare numeri interi di lunghezza arbitaria
    Il tipo Symbol viene usato per creare inddentificatori per oggetti.*/ 
/* ESERCIZIO 2 
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* GLi oggetti in JavaScript vengono utilizzati per catologare vari tipi di dati ed altri elementi più complessi. Un oggetto può essere creato tramite le parentesi graffe {}, con un’opzionale lista di proprietà.  Una proprietà è una coppia chiave: valore, dove chiave è una stringa (detta anche nome di proprietà), mentre valore può essere qualsiasi cosa.
/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var numero1= 12;
var numero2= 20;
var risultato= numero1 + numero2;
console.log("Il risultato dell'addizione è:" + risultato);
/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
/*
/* SCRIVI QUI LA TUA RISPOSTA */
var x = 12;
console.log("Il valore di x è: " + x)
/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var name = "Radomir";
console.log("Il valore di name è: " + name)
/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var x = 12;
var number1 = 4 - x;
console.log("Il risultato della sottrazione è: " + number1);
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var name1 = "john";
var name2 = "John";
console.log("name1 è diverso da name2:", name1 !== name2);
console.log("Uguaglianza dopo la trasformazione in lowercase:", name1.toLowerCase() === name2.toLowerCase());
/* ESERCIZIO 8
Crea un oggetto di Javascript che ti rappresenti (come proprietà usa nome,cognome e hobby)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var rappresentazione = {
    nome: "Radomir",
    cognome: "Simic",
    hobby: "Amo andare in palestra, videogiocare e attualmente studio il corso di epicode."
};
console.log("Nome:" + rappresentazione.nome)
console.log("Cognome:" + rappresentazione.cognome)
console.log("Hobby:" + rappresentazione.hobby)