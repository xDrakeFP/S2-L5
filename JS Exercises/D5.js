/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];
console.log("esercizio 1 : ", pets);

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort();
console.log("esercizio 2 : ", pets);
/* ESERCIZIO 3
Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
pets.reverse();
console.log("esercizio 3 : ", pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
pets.reverse();
console.log("esercizio 4 :");
console.log("prima del cambiamento : ", pets);
let temp = pets[0];
pets.splice(0, 1);
pets.push(temp);
console.log("dopo il cambiamento : ", pets);

/* ESERCIZIO 5
Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];
const GeneraTarga = function () {
  let targa = Math.ceil(Math.random() * 100000);
  return targa;
};
console.log("esercizio 5 :");
for (let i = 0; i < cars.length; i++) {
  let targa = GeneraTarga();
  cars[i].licensePlate = targa;
}
console.log(cars);

/* ESERCIZIO 6
Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log("esercizio 6 :");
let targa = GeneraTarga();
cars.push({
  brand: "Fiat",
  model: "500",
  color: "white",
  trims: ["city", "mom"],
  licensePlate: targa,
});
console.log("array con 500 aggiunta :", cars);

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.splice(cars[i].trims.length - 1, 1);
}
console.log("array con ultimo trims rimossa :", cars);

/* ESERCIZIO 7
Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];
console.log("esercizio 7 :");
for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0]);
}
console.log(justTrims);
/* ESERCIZIO 8
Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
"color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

console.log("esercizio 8 :");
for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.charAt(0) === "b") {
    console.log(
      cars[i].brand,
      " ",
      cars[i].model,
      " ha un colore : ",
      cars[i].color,
      "quindi ti dico Fizz"
    );
  } else {
    console.log(
      cars[i].brand,
      " ",
      cars[i].model,
      " ha un colore : ",
      cars[i].color,
      "quindi ti dico Buzz"
    );
  }
}

/* ESERCIZIO 9
Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];
console.log("esercizio 9 :");
const stop = 32;
let counter = 0;
while (numericArray[counter] !== stop) {
  console.log(numericArray[counter]);
  counter++;
}

/* ESERCIZIO 10
Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
dell'alfabeto italiano.
es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
console.log("esercizio 10 :");
const numberFromCharacters = [];
for (let i = 0; i < charactersArray.length; i++) {
  let temp;
  switch (charactersArray[i]) {
    case "a":
      temp = 1;
      break;
    case "b":
      temp = 2;
      break;
    case "c":
      temp = 3;
      break;
    case "d":
      temp = 4;
      break;
    case "e":
      temp = 5;
      break;
    case "f":
      temp = 6;
      break;
    case "g":
      temp = 7;
      break;
    case "h":
      temp = 8;
      break;
    case "i":
      temp = 9;
      break;
    case "l":
      temp = 10;
      break;
    case "m":
      temp = 11;
      break;
    case "n":
      temp = 12;
      break;
    case "o":
      temp = 13;
      break;
    case "p":
      temp = 14;
      break;
    case "q":
      temp = 15;
      break;
    case "r":
      temp = 16;
      break;
    case "s":
      temp = 17;
      break;
    case "t":
      temp = 18;
      break;
    case "u":
      temp = 19;
      break;
    case "v":
      temp = 20;
      break;
    case "z":
      temp = 21;
      break;
  }
  numberFromCharacters.push(temp);
}
console.log(numberFromCharacters);

// Ho trovato questo metodo online ma non era riadattabile all'alfabeto italiano e non utilizzava switch
console.log("Piccolo extra dell'esercizio 10");
const numberFromCharactersAlt = [];
for (let i = 0; i < charactersArray.length; i++) {
  let temp = charactersArray[i].charCodeAt(0); //charCodeAt restituisce il codice UNICODE del carattere, con (0) si da l'indice della stringa che gli dai (in questo caso 0 dato che e' un singolo carattere)
  numberFromCharactersAlt.push(temp - 96); // Gli sottraggo 96 perche la lettera 'a' dell'alfabeto in minuscolo ha un valore di 97,
}
console.log(numberFromCharactersAlt);
