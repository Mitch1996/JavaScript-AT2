const constOefening="Const Tekst"
console.log(constOefening)

ConstOefening="Const Tekst Twee"
console.log(constOefening)

//1.1Ik zie bij de ene het wel in de console verschijnen en ij de andere niet


let typeQuestion = 'function calculateSomething() {}'
console.log('This is a '+ typeof typeQuestion + ', with the value'+ typeQuestion)

//1.2.1. In de console komt te staan: this is a string with the value number. Ik had verwacht dat er 0 zou staan omdat er geen waarde is ingevoerd.
//1.2.2. true= value true
//       false= value false
//       unidentified= value...
//       22 = value 22
//       Symbol () = value ()
//       null= value null
//       {}= value {}
//       new Object()
//       function calculateSomething() {}


//1.3.1 Wat ik hieruit krijg is: 55 ipv 10

//1.3.2 Als ik van beide getallen een number maak dan komt er number te staan.
//1.3.3 == wordt true
//      === wordt true
//      != wordt false
//      !== wordt false

let increment=1;
console.log(increment++)
console.log(++increment)
//1.4.1 Bij beide krijg ik het getal 2.
//1.4.2 Dan krijg ik het getal 1 en 3.

let modulo=24% 10;
console.log(modulo)

let division=24/10
console.log(division)
//1.4.3 Bij de modulo krijg ik het getal 4 en bij division het getal 2.4

let someNumber=undefined;
console.log(!someNumber)
//1.4.4 Waarde Tekst geeft false
//1.4.5 Waarde 5 geeft false
//      Waarde Boolean geeft false
//      Waarde false geeft true
//      Waarde "false" geeft false
//      Waarde true geeft false
//      Warde "true" geeft false
//      Waarde null geeft true
//      Waarde undefined geeft true

//1.4.6 += werkt niet in een string. deze kun je anders opschrijven:

let number=5
number**=5
console.log(number)

//1.4.7 adhv van bovenstaande voorbeeld.
// Bij += wordt 5 opgeteld bij 5 en krijg je in je console het getal 10.
// Bij -= wordt 5 afgetrokken van 5 en krijg je in je console het getal 10.
// Bij *= wordt 5 vermenigvuldigd met 5 en krijg je in je console het getal 25.
// Bij /= wordt 5 gedeeld door 5 en krijg je in je console het getal 1.
// Bij %= krijg je het antwoord 0 te zien
// Bij **= wordt de 5 tot de macht 5 en krijg je in je console 3125.