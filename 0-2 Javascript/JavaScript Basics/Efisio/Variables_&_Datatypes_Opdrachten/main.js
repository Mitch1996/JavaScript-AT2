//Variables & Datatypes - Opdrachten

//let letOefening = "Let Tekst"
//let letOefening = "Let Tekst Twee!"  Foutmelding, 2x gedeclareerd
//console.log(letOefening)

let letOefening = "Let Tekst"
console.log(letOefening)   //Werkend

letOefening = "Let Tekst Twee!"
console.log(letOefening)  //Werkend

const contOefening = "Const Tekst";
console.log(contOefening)

//contOefening = "Const Tekst Twee!";  Foutmelding, toewijzing aan constante waarde
//console.log(contOefening)

varOefening = "Var tekst";
console.log(varOefening)

var varOefening = "Var Tekst Twee!";
console.log(varOefening)

var varOefening = "Var Tekst Drie!";
console.log(varOefening)

//let typeQuestion = "Number"                               This is a string, with the value: Number
//let typeQuestion = true                                   This is a boolean, with the value: true
//let typeQuestion = false                                  This is a boolean, with the value: false
//let typeQuestion =                                        ReferenceError: Cannot access 'typeQuestion' before initialization
//let typeQuestion = 22                                     This is a number, with the value: 22
//let typeQuestion = 22n                                    This is a bigint, with the value: 22
//let typeQuestion = Symbol()                               TypeError: Cannot convert a Symbol value to a string
//let typeQuestion = null                                   This is a object, with the value: null
//let typeQuestion = {}                                     This is a object, with the value: [object Object]
//let typeQuestion = new Object()                           This is a object, with the value: [object Object]
//let typeQuestion = function calculateSomething() {}       This is a function, with the value: function calculateSomething() {}
//console.log("This is a " + typeof typeQuestion + ", with the value: " + typeQuestion)

//let someNumber = 5;
//let anotherNumber = "5";
//console.log(someNumber + anotherNumber)      55 en 10 als beide number
//console.log(someNumber == anotherNumber)     true
//console.log(someNumber === anotherNumber)    false
//console.log(someNumber != anotherNumber)     false
//console.log(someNumber !== anotherNumber)    true

let increment = 1;
//console.log(++increment)   eerst 2 en 2, na omkering 1 en 3
//console.log(increment++)
//console.log(++increment)

let modulo = 24 % 10;
console.log(modulo) // resultaat = 4

let division = 24 / 10;
console.log(division) // resultaat = 2.4

//let someNumber = "Tekst";    false
//let someNumber = 5;          false
//let someNumber = Boolean;    false
//let someNumber = false;      true
//let someNumber = "false";    false
//let someNumber = true;       false
//let someNumber = "true";     false
//let someNumber = null;       true
//let someNumber = ;           SyntaxError: Unexpected token ';'
//console.log( ! someNumber)

let a = 2;
let b = 'hello';

console.log(a += 3); // Addition   kan ook zo console.log(a + 3)
// Expected output: 5
//console.log(a -= 3);  aftreken, -1
//console.log(a *= 3); vermenigvuldigen, 6
//console.log(a /= 3); delen , 0.666666
//console.log(a %= 3);  remainder, 2
//console.log(a **= 3); machten, 8

console.log(b += ' world'); // Concatenation    kan ook zo console.log(b + ' world');
// Expected output: "hello world"
//console.log(b -= ' world'); NaN
//console.log(b *= ' world'); NaN
//console.log(b /= ' world'); NaN
//console.log(b %= ' world'); NaN
//console.log(b **= ' world'); NaN

//Uitleg NaN

//In JavaScript, NaN is short for "Not-a-Number".
// In JavaScript, NaN is a number that is not a legal number.