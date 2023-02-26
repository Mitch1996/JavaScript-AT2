// Opdracht 3.1.3
//Schrijf de If conditie zo, dat je alleen “Result!” ziet als x==4 en y==8

//let x=4;
//let y=8

//if(x==4 && y==8){
//    console.log("Result!")
//}

//3.1.4 Schrijf het nu zo dat je alleen “Result!” ziet als x==4 OF y==8

//let x=4;
//let y=8

//if(x==4||y==8){
 //   console.log("Result!")
//}

//3.1.5 Zet nu de console.log(“Results”) in een Else { } na de If. Kan je de conditie omdraaien zodat je alsnog “Results!” te zien krijgt?

//let x=4;
//let y=8

//if(x==4||y==8){
  //  console.log("Result!")
//}

//else{

//}

//3.1.6 Kan je het vorige antwoord ook geven zonder || te gebruiken?
//dan moet ik de vorige vraag kunnen begrijpen :P

// 3.1.7 Schrijf voor de volgende opdrachten 1 If/Else die 1 variabele waarde controleert, en zorg voor het volgende:

let temperatuur= 12;

//Log het in je console als de waarde groter dan 5 EN kleiner dan 10 is.
if (temperatuur =>5 && temperatuur<10){
    console.log("het is frisjes");
}

//Zo niet, log dan in je console als de waarde 11 of groter EN 20 of kleiner is.
else if(temperatuur =>11||temperatuur <=20){
    console.log("het is aangenaam");
}
//Zo niet, log dan in je console als de waarde 21 of 23 is.
else if(temperatuur ==21||temperatuur ==23);{
     console.log("het wordt warmer");
}
//Zo niet, log dan in je console als de waarde kleiner dan 35 OF tussen de 40 en 45 is.
 if (temperatuur<35|| (temperatuur >40 &&temperatuur <45)){
    console.log("het is bloedje heet!");
}

else{
    console.log("het is een ijskast buiten")
}

//Test of je bij alle uitkomsten kan komen. Verandert er iets als je alle If/Else omzet in aparte If blokken?


//3.2.1 Schrijf een If/Else blok die een eigen variabele controleert:

let k=20

//Gelijk aan 3?
if (k==3) {
    console.log("k is gelijk aan 3")
}

//Groter dan 4?
if (k >4) {
    console.log("k is groter dan 4")

    //Groter dan 11?    
} 
else if (k>11) {
    console.log("k is groter dan 11")
} 

//Kleiner dan 3?
else {
    console.log("k is kleiner dan 3")
} 

//3.2.2 Test met 2, 3, 4, 5 en 20 geeft: bij 4 wordt niks gelogd omdat deze ongedefinieerd is. Bij 20 logt console nog steeds"groter dan 4".


//3.2.3 
let month=3

if (month==2) {
    console.log("februari")
}
else if(month==3){
    console.log("maart")
}
else if(month==4){
    console.log("april")
}
else{
    console.log("ongeldige maand")
}

//3.2.4 Switch case

switch (month) {
case 1:
console.log("Januari")
break;

case 2:
console.log("Februari")
break;

case 3:
console.log("Maart")
break;
    
default:
    console.log("Deze input is geen maand")
        break;
}

//3.2.5 Ternary Operator

let x=3
// let results;
// if(x<=4 && x>0){
    results=2;
// } else{
    // results=5;
// }
// console.log(results)

console.log(( x<=4 && x>0) ? "2": "5")