/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output collega questo file al tuo HTML e apri la console del browser. 
- Dovrai creare una direttiva di output per testare le variabili od i risultati delle espressioni che crei
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*
  Dati di tipo String: I dati di tipo stringa,sono un insieme dei dati testuali o caratteri che per essere indicati come tali
  vanno inseriti tra degli apici o delle virgolette.
  (possono essere inseriti anche dei caratteri numerici, ma andranno comunque letti come una insieme di caratteri testuali).
  
  Dati di tipo numerico: I dati numerici sonon dei dati che possono contenere sono dati di tipo numerico e devono essere
  inizailizzati senza apici o virgolette (per indicare un numero deciamale invece della virgola viene usato il " . ").

  Dati di tipo Boolean: I dati booleani, sono dati che, di solito vengono utilizzati per fare dei controlli condizionali dove
  come contenuti possibili che si possono presentare sono solo due: vero o falso ("true", "false");

  Dati di tipo Null: Grazie al valore "Null" è possibile assegnare consapevolmente ad una variabile/contenitore un oggetto vuoto
  che successivamente potrà essere modificato/riempito con un altro tipo di valore o oggetto 
  (può anche essere usato per fare dei controlli per verificare se la la variabile o contenitore è vuota o meno).

  Dato Undefined: I dati undefined sono quei dati che non sono satiti definiti, non gli è stato assegnato nessun valore.

 */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let nome = "Vasil";

console.log("Il mio nome: " + nome);


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("la somma dei numeri 12 e 20 è uguale a:",  12 + 20);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
nome = "Ivanov";
console.log("Nome modicato col cognome: " + nome);

const cognome = "Ivanov";
console.log("Per sfortuna di Don Toretto non è Diesel il mio cognome ma è: " +cognome);


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

x = 12;
console.log("sottrazione tra i numeri 4 e la variable 'x' è uguale a: ", x - 4);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "john";
let name2 = "John";


console.log("Primo nome: " + name1 + ", ", "secondo nome: " + name2 +". ", name1 !== name2 ?"Il primo nome è diverso dal secondo nome" : "i due nomi sono uguali");

console.log("Verifica dell'uguaglianza dei due nomi senza le maiuscole: ", name1.toLowerCase() === name2.toLowerCase() ? true : false );