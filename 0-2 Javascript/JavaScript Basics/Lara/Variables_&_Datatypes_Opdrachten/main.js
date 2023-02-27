function opdrachtCommandLine(opdrachtId) {
    console.log("Opdracht: " + opdrachtId)
  }
  
  function verwachtingCommandLine(verwachting) {
    console.log("Verwachting: " + verwachting)
  }
  
  opdrachtCommandLine("1.1a")
  verwachtingCommandLine("Let tekst twee wordt gelogd")

  let letOefening = "Let Tekst"
  letOefening = "Let Tekst Twee!"
  console.log(letOefening)

  opdrachtCommandLine("1.1b")
  console.log("Eerst word Let Tekst geprint daarna Let Teks Twee!")

  let letOefening2 = "Let Tekst"
  console.log(letOefening2)

  letoefening2 = "Let Tekst Twee!"
  console.log(letOefening2)

  opdrachtCommandLine("1.1c")
  verwachtingCommandLine("Const Tekst Twee word geprint, daarna foutmelding")

  const constOefening = "Const tekst";
  console.log(constOefening)

  //constOefening = "Const Tekst Twee!";
  //console.log(constOefening)

  opdrachtCommandLine("1.1d")
  verwachtingCommandLine("Alle 3 de teksten worden uitgeprint")

  varOefening = "Var Tekst";
  console.log(varOefening)

  var varOefening = "Var Tekst Twee!";
  console.log(varOefening);

  var varOefening = "Var Tekst Drie!";
  console.log(varOefening);

  opdrachtCommandLine("1.2")

  function opdracht12Execution(value) {
    console.log("This is a " + typeof value + ", with the value: " + value)
  }

  opdracht12Execution("Number")
  opdracht12Execution("False")
  opdracht12Execution(undefined)
  opdracht12Execution("22")
  opdracht12Execution("22n")
  opdracht12Execution()
  opdracht12Execution(null)
  opdracht12Execution({})
  opdracht12Execution("new Object")
  opdracht12Execution("function calculateSomething(){}")

opdrachtCommandLine("1.3")

let someNumber = 5
let someOtherNumber = "5"
console.log(someNumber + someOtherNumber)
console.log(someNumber == someOtherNumber)
console.log(someNumber === someOtherNumber)
console.log(someNumber != someOtherNumber)
console.log(someNumber !== someOtherNumber)

opdrachtCommandLine("1.4")

let increment = 1
console.log(++increment)
console.log(increment++)

console.log(increment++)
console.log(++increment)

let modulo = 24 % 10
console.log(modulo)

let division = 24 / 10
console.log(division)

function notOperatorTest(value) {
    console.log("Tested value is: " + value + ", and has type: " + typeof value)
    console.log(!value)
  }

notOperatorTest("Tekst")
notOperatorTest(5)
notOperatorTest(Boolean)
notOperatorTest(false)
notOperatorTest("false")
notOperatorTest(true)
notOperatorTest("true")
notOperatorTest(null)
notOperatorTest(undefined)

console.log("de x= operatoren voeren de operator uit met het rechter variabele op de linker. een andere vorm hiervan is variabele1 = variabele1 x variabele2")




