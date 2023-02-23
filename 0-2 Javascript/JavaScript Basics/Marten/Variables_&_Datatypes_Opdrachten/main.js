<<<<<<< HEAD
function opdrachtCommandLine(opdrachtId) {
  console.log("Opdracht: " + opdrachtId)
}

function verwachtingCommandLine(verwachting) {
  console.log("Verwachting: " + verwachting)
}

opdrachtCommandLine("1.1a")
verwachtingCommandLine("Let tekst twee wordt gelogd")

let letOefening = "Let tekst"
letOefening = "Let tekst twee!"
console.log(letOefening)

opdrachtCommandLine("1.1b")
verwachtingCommandLine("Eerst wordt let tekst uitgeprint daarna let tekst twee")

let letOefening2 = "Let tekst"
console.log(letOefening2)

letOefening2 = "Let tekst twee!"
console.log(letOefening2)

opdrachtCommandLine("1.1c")
verwachtingCommandLine("Const tekst wordt uitgeprint en hij geeft een foutmelding (in de laatste versie uitgecomment om de code te laten lopen)")

const constOefening = "Const tekst"
console.log(constOefening)

//constOefening = "Const tekst twee!"
//console.log(constOefening)

opdrachtCommandLine("1.1d")
verwachtingCommandLine("Alle drie de teksten worden 1 voor 1 uitgeprint")

var varOefening = "Var tekst"
console.log(varOefening)

var varOefening = "Var tekst twee"
console.log(varOefening)

var varOefening = "Var tekst drie"
console.log(varOefening)

opdrachtCommandLine("1.2")

function opdracht12Execution(value) {
  console.log("This is a " + typeof value + ", with the value: " + value)
}

opdracht12Execution("number")
opdracht12Execution(true)
opdracht12Execution(false)
opdracht12Execution(undefined)
opdracht12Execution(22)
opdracht12Execution(22n)
//opdracht12Execution(Symbol())
opdracht12Execution(null)
opdracht12Execution({})
opdracht12Execution(new Object())
opdracht12Execution(function calculateSomething() {})

opdrachtCommandLine("1.3")
let someNumber = 5
let someOtherNumber = "5"
console.log(someNumber + someOtherNumber)
console.log(someNumber == someOtherNumber)
console.log(someNumber === someOtherNumber)
console.log(someNumber != someOtherNumber)
console.log(someNumber !== someOtherNumber)

opdrachtCommandLine("1.4")
let increment1 = 1
console.log(++increment1)
console.log(increment1++)

let increment2 = 1
console.log(increment2++)
console.log(++increment2)

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
=======
function opdrachtCommandLine(opdrachtId) {
  console.log("Opdracht: " + opdrachtId)
}

function verwachtingCommandLine(verwachting) {
  console.log("Verwachting: " + verwachting)
}

opdrachtCommandLine("1.1a")
verwachtingCommandLine("Let tekst twee wordt gelogd")

let letOefening = "Let tekst"
letOefening = "Let tekst twee!"
console.log(letOefening)

opdrachtCommandLine("1.1b")
verwachtingCommandLine("Eerst wordt let tekst uitgeprint daarna let tekst twee")

let letOefening2 = "Let tekst"
console.log(letOefening2)

letOefening2 = "Let tekst twee!"
console.log(letOefening2)

opdrachtCommandLine("1.1c")
verwachtingCommandLine("Const tekst wordt uitgeprint en hij geeft een foutmelding (in de laatste versie uitgecomment om de code te laten lopen)")

const constOefening = "Const tekst"
console.log(constOefening)

//constOefening = "Const tekst twee!"
//console.log(constOefening)

opdrachtCommandLine("1.1d")
verwachtingCommandLine("Alle drie de teksten worden 1 voor 1 uitgeprint")

var varOefening = "Var tekst"
console.log(varOefening)

var varOefening = "Var tekst twee"
console.log(varOefening)

var varOefening = "Var tekst drie"
console.log(varOefening)

opdrachtCommandLine("1.2")

function opdracht12Execution(value) {
  console.log("This is a " + typeof value + ", with the value: " + value)
}

opdracht12Execution("number")
opdracht12Execution(true)
opdracht12Execution(false)
opdracht12Execution(undefined)
opdracht12Execution(22)
opdracht12Execution(22n)
//opdracht12Execution(Symbol())
opdracht12Execution(null)
opdracht12Execution({})
opdracht12Execution(new Object())
opdracht12Execution(function calculateSomething() {})

opdrachtCommandLine("1.3")
let someNumber = 5
let someOtherNumber = "5"
console.log(someNumber + someOtherNumber)
console.log(someNumber == someOtherNumber)
console.log(someNumber === someOtherNumber)
console.log(someNumber != someOtherNumber)
console.log(someNumber !== someOtherNumber)

opdrachtCommandLine("1.4")
let increment1 = 1
console.log(++increment1)
console.log(increment1++)

let increment2 = 1
console.log(increment2++)
console.log(++increment2)

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
>>>>>>> main
