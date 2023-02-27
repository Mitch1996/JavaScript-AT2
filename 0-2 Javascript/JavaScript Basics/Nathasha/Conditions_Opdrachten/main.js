//Conditions - Opdrachten
//Opdracht 3.1:

let sameValue = 5;
if (sameValue == 5) {
    console.log ("Zie je de eerste? Dubbel is gelijk aan (==) is een vergelijkingsoperator, die de operanden van hetzelfde type vóór de vergelijking transformeert.");
}
if (sameValue===5){
    console.log ("Zie je de tweede? === (Triple is gelijk aan) is een strikte vergelijkingsoperator voor gelijkheid in JavaScript, die false retourneert voor de waarden die niet van een vergelijkbaar type zijn. Deze operator voert typecasting uit voor gelijkheid.");
}
if (sameValue >=3){

}
console.log ("Zie je de deerde? De operator groter dan of gelijk aan ( >= ) retourneert waar als de linker operand groter is dan of gelijk is aan de rechter operand, en anders onwaar.");

//Schrijf de If conditie zo, dat je alleen “Result!” ziet als x==4 en y==8
let x = 4;
let y = 8;
if (x==4 , y==8) {
    console.log('Result!')
}
//Schrijf het nu zo dat je alleen “Result!” ziet als x==4 OF y==8
let x = 4;
let y = 8;
if (x==4 , y==8) {
    console.log('Result!')
}
