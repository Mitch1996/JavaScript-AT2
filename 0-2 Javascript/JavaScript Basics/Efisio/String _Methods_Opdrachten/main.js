// Opdracht 2.1

let someKittens = "De poes van de buurman heeft kittens gehad! Hij vraagt of wij nog kittens willen.";

let someKittensVoor = someKittens.substring(0,43);
let someKittensAchter = someKittens.substring(44);

/*const myArray = someKittens.split("!");
let someKittensVoor = myArray[0];
let someKittensAchter = myArray[1];*/

let hoofdLetters = someKittens.toUpperCase();

let eerste = someKittens.indexOf("kittens");
let laatste = someKittens.lastIndexOf("kittens");

console.log("someKittens : " + someKittens);
console.log("someKittensVoor : " + someKittensVoor);
console.log("someKittensAchter : " + someKittensAchter);
console.log("someKittens in hoofdletters : " + hoofdLetters);
console.log("index van eerste kittens in someKittens : " + eerste);
console.log("index van laatste kittens in someKittens : " + laatste);

// Opdracht 2.2

let subTest = someKittens.substring(22,2);  // dan word de waarde vanaf het lagere tweede getal tot de waarde van het hogere eerste getal getoond.
let sliceTest = someKittens.slice(22,11);   // niets

console.log("subTest : " + subTest);
console.log("sliceTest : " + sliceTest);

subTest = someKittens.substring(22,-2);
sliceTest = someKittens.slice(22,-2);

console.log("subTest : " + subTest);  // waarde van index 0 t/m 22 word getoond
console.log("sliceTest : " + sliceTest); // waarde van index 22 t/m einde index -2 word getoond

// Opdracht 2.3

const myArray = someKittens.split(" ");
console.log("Array van someKittens : " + myArray);

//Opdracht 3.1

/*== is een comparison operator en voordat de waardes worden vergeleken , worden deze getransformeerd, bv string in number
=== is een strict equality comparison operator en vergelijkt of beide waardes van het zelfde type zijn, dus 2 === "2" geeft false
> is groter dan
>= is groter of gelijk aan
< is kleiner dan
<= is kleiner of gelijk aan*/

let x = 4;
let y = 8;
if (!(x==4 || y==8)) {
    console.log("No Result!")
}   else {
    console.log("Result!")
}

if (x==4 ) {
    console.log("Result!")
}   else if (y==8){
    console.log("Result!")
}

let z = 44;

if ( 5 < z && z < 10 ){
    console.log("De waarde is : " + z)
} else if ( z >= 11 && z <= 20 ) {
    console.log("De waarde is van 11 t/m 20 : " + z)
} else if ( z == 21 || z == 23 ) {
    console.log("De waarde is 21 of 23 : " + z)
} else if ( z < 35 || ( 40 < z && z < 45)) {
    console.log("De waarde is kleiner dan 35 of tussen 40 en 45 : " + z)
}

//Opdracht 3.2
let gok = 20;  // bij 4 geen output

if ( gok == 3){
    console.log("De waarde is : " + gok)
} else if ( gok > 4 ){
    console.log("De waarde is : " + gok)
} else if ( gok > 11){
    console.log("De waarde is : " + gok)
} else if ( gok < 3 ){
    console.log("De waarde is : " + gok)
}

var januari = 1;
var februari = 2;
var maart = 3;
var april = 4;
var mei = 5;
var juni = 6;
var juli = 7;
var augustus = 8;
var september = 9;
var oktober = 10;
var november = 11;
var december = 12;
let maand = 7;

if ( maand == januari ){
    console.log("De maand is Januari")
} else if ( maand == februari ){
    console.log("De maand is Februari")
} else if ( maand == maart ){
    console.log("De maand is Maart")
} else if ( maand == april ){
    console.log("De maand is April")
} else if ( maand == mei ){
    console.log("De maand is Mei")
} else if ( maand == juni ){
    console.log("De maand is Juni")
} else if ( maand == juli ){
    console.log("De maand is Juli")
} else if ( maand == augustus ){
    console.log("De maand is Augustus")
} else if ( maand == september ){
    console.log("De maand is September")
} else if ( maand == oktober ){
    console.log("De maand is Oktober")
} else if ( maand == november ){
    console.log("De maand is November")
} else if ( maand == december ){
    console.log("De maand is december")
} else {
    console.log("Geen geldige maand!")
}

switch (maand) {
    case 1:
        console.log("De maand is Januari")
        break;
    case 2:
        console.log("De maand is Februari")
        break;
    case 3:
        console.log("De maand is Maart")
        break;
    case 4:
        console.log("De maand is April")
        break;
    case 5:
        console.log("De maand is Mei")
        break;
    case 6:
        console.log("De maand is Juni")
        break;
    case 7:
        console.log("De maand is Juli")
        break;
    case 8:
        console.log("De maand is Augustus")
        break;
    case 9:
        console.log("De maand is September")
        break;
    case 10:
        console.log("De maand is Oktober")
        break;
    case 11:
        console.log("De maand is November")
        break;
    case 12:
        console.log("De maand is december")
        break;
    default:
        console.log("Geen geldige maand!")
}

let waarde = 3;

waarde <= 4 && waarde >=0 ? console.log("Waarde is 2") : console.log("Waarde is 5")