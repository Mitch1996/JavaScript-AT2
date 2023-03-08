function logOpdracht(opdracht){
    console.log("Opdracht " + opdracht + ":")
}

logOpdracht("5.3.1")
let dutchSports = ["Voetbal","Hockey","Schaatsen"]

dutchSports.push("Zeilen")
dutchSports.push("Zwemmen")
logOpdracht("5.3.2")
dutchSports.unshift("Volleybal")
logOpdracht("5.3.3")
let ballSports = ["Voetbal","Hockey","Volleybal"]

dutchSports = dutchSports.filter( (value) => !ballSports.includes(value) )

console.log(dutchSports)

logOpdracht("5.3.6")
dutchSports.forEach((value)=>console.log(value))

logOpdracht("5.3.7")
let sportsLength = dutchSports.map((value)=>value.length)

console.log(sportsLength)