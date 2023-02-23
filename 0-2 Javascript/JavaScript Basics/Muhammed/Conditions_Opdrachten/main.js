// 3.

// let x = 4;
// let y = 8
// if (x = 4 && y == 8) 
// {console.log("Result!")}


// 4.

// let x = 4;
// let y = 8
// if (x = 4 || y == 8) 
// {console.log("Result!")}


// 5.

// let x = 4;
// let y = 8
// if (x = 4 || y == 8) 
// {console.log("Result!")}
// else {console.log("Result!")}

// Als ik de conditie omdraai krijg ik een error
// let x = 4;
// let y = 8
// if (y == 8 || x = 4)
// {console.log("Result!")}
// else {console.log("Result!")}


// 6.

// let x = 4;
// let y = 8
// if (x = 4)
// {console.log("Result!")}
// else if (y == 8)
// {console.log("Result!")}


// Opdrachten 7 t/m 11

// let age = 42
// if (age > 5 && age < 10)
// {console.log("Jij bent tussen tussen de 5 en 10 jaar oud")}
// else if (age >= 11 && age <= 20)
// {console.log("Jij bent tussen de 11 en 20 jaar oud")}
// else if (age == 21 || age ==23)
// {console.log("Jij bent 21 of 23 jaar oud")}
// else if (age < 35 || age > 40 && age < 45)
// {console.log("Jij bent jonger dan 35 of tussen de 40 en 45 jaar")}


// 11. Er verandert er niets als je alle If/Else omzet in aparte blokken omzet.

// let age = 7
// if (age > 5 && age < 10)
// {console.log("Jij bent tussen tussen de 5 en 10 jaar oud")}

// let age = 15
// if (age >= 11 && age <= 20)
// {console.log("Jij bent tussen de 11 en 20 jaar oud")}

// let age = 23
// if (age == 21 || age ==23)
// {console.log("Jij bent 21 of 23 jaar oud")}

// let age = 30
// if (age < 35 || age > 40 && age < 45)
// {console.log("Jij bent jonger dan 35 of tussen de 40 en 45 jaar")}

// 1.

// let age = 20
// if (age == 3)
// {console.log("Leeftijd is 3 jaar.")}
// else if (age > 4)
// {console.log("Leeftijd is ouder dan 4 jaar.")}
// else if (age > 11)
// {console.log("Leeftijd is ouder dan 11 jaar.")}
// else if (age < 3)
// {console.log("Leeftijd is jonger dan 3 jaar")}

// 2.
// Met de variabele 20 krijg je de uitkomst "Leeftijd is ouder dan 4 jaar" en niet "Leeftijd is ouder dan 11 jaar".


// 3.

// let maand = 0
// if (maand == 1)
// {console.log("Januari")}
// else if (maand == 2)
// {console.log("Februari")}
// else if (maand == 3)
// {console.log("Maart")}
// else if (maand == 4)
// {console.log("April")}
// else if (maand == 5)
// {console.log("Mei")}
// else if (maand == 6)
// {console.log("Juni")}
// else if (maand == 7)
// {console.log("Juli")}
// else if (maand == 8)
// {console.log("Augustus")}
// else if (maand == 9)
// {console.log("September")}
// else if (maand == 10)
// {console.log("Oktober")}
// else if (maand == 11)
// {console.log("November")}
// else if (maand == 12)
// {console.log("December")}
// else if (maand == 0 || maand >12)
// {console.log("Geen geldige maand!")}


// 4.

// let maand = 8
// switch (maand) 
// {
//     case 1: maand = "Januari"
//     break;
//     case 2: maand = "Februari"
//     break;
//     case 3: maand = "Maart" 
//     break;
//     case 4: maand = "April" 
//     break;
//     case 5: maand = "Mei" 
//     break;
//     case 6: maand = "Juni" 
//     break;
//     case 7: maand = "Juli" 
//     break;
//     case 8: maand = "Augustus" 
//     break;
//     case 9: maand = "September" 
//     break;
//     case 10: maand = "Oktober" 
//     break;
//     case 11: maand = "November" 
//     break;
//     case 12: maand = "December" 
//     break;
//     default: maand = "Geen geldige maand!"
// }
// console.log(maand)


// 5.

// let x = 3;
// let results;
// if (x<=4 && x>=0) {
//     results = 2;
// } else {
//     results = 5;
// }
// console.log(results)

let x = 3
console.log((x<=4 && x>=0) ? 2 : 5)