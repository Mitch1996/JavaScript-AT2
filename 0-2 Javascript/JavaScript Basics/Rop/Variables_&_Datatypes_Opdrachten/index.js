var CAPSLOCK = "Hoofdletters";
var capslock = "Geen hoofdletters";

console.log(CAPSLOCK);
console.log(capslock);


let camelCasedVariable = "text"
console.log(typeof camelCasedVariable)

//OPDRACHT 1.1

/* Let twee keer gedeclareerd, werkt niet

let letOefening = "Let tekst"
let letOefening = "Let tekst twee"

console.log(letOefening) */


let letOefening ="Let tekst";
console.log(letOefening)

letOefening ="Let tekst twee";
console.log(letOefening)


/*Constante kun je niet nog een keer declareren

const constOefening = "const text";
console.log(constOefening)

constOefening = "const text twee"; 
console.log(constOefening) */


// met var gaat het wel, deze gaat mooi het rijtje af
varOefening="vartext";
console.log(varOefening);

var varOefening=("vartext twee")
console.log(varOefening);

var varOefening=("vartext drie");
console.log(varOefening)

//OPDRACHT 1.2

//ALLE VARIANTEN UITGEPROBEERD, ENKELE HIER GENOTEERD

/*let typeQuestion = "22"
console.log("this is a " + typeof typeQuestion + ", with the value of " + typeQuestion)*/

/*et typeQuestion = "true"
console.log("this is a " + typeof typeQuestion + ", with the value of " + typeQuestion)*/

/*let typeQuestion = ""
console.log("this is a " + typeof typeQuestion + ", with the value of " + typeQuestion)*/

let typeQuestion = "{}"
console.log("this is a " + typeof typeQuestion + ", with the value of " + typeQuestion)



/*let someNumber = 5;
let anotherNumber = "5";
console.log(someNumber + anotherNumber)*/

/* 5==5 en 5===5 zijn inderdaad allebei true
let someNumber = 5;
let anotherNumber = 5;
console.log(someNumber === anotherNumber)*/

/*let someNumber = 5;
let anotherNumber = "5";
console.log(someNumber != anotherNumber)*/

//OPDRACHT 1.4

//resultaat is 2 voor beiden
let increment = "1"
console.log(++increment);
console.log(increment++);

//wat overblijft is 4
let modulo = 24 % 10;
console.log(modulo);
//dit is gewoon delen
let division = 24/10;
console.log(division);

let someNumber ="boolean";
console.log(!someNumber)

/*+= is toevoegen en meteen het resultaat let x = 10;
x += 5 geeft 15 als resultaat*/


let x = 10;
let y = 5;
console.log(x += y); 


//zo werkt dat ook met andere rekenkundige symbolen gecombineerd met = teken.*/
























