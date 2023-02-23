function opdrachtCommandLine(opdrachtId) {
  console.log("Opdracht: " + opdrachtId)
}

function verwachtingCommandLine(verwachting) {
  console.log("Verwachting: " + verwachting)
}

//Opdracht 1

opdrachtCommandLine(2.1)

let someKittens = "De poes van de buurman heeft kittens gehad! Hij vraag of wij nog kittens willen."

const substrings = someKittens.split()

let someKittens1 = substrings[0]
console.log(someKittens1)
let someKittens2 = substrings[1]
console.log(someKittens2)

let someKittensUpper = someKittens.toUpperCase()
console.log(someKittensUpper)
let indexOfFirst = someKittens.indexOf("kittens")
let indexOfLast = someKittens.lastIndexOf("kittens")
console.log(indexOfFirst)
console.log(indexOfLast)

someKittens.charAt(indexOfFirst)
someKittens.charAt(indexOfLast)

opdrachtCommandLine(2.2)

console.log(someKittens.substring(9, 1))
console.log("1. Hetzelfde als andersom")

console.log(someKittens.slice(9, 1))
console.log("2. Niets")

console.log(someKittens.substring(-9, -1))
console.log("3. Niets")

console.log(someKittens.slice(-9, -1))
console.log("4. Dan meet hij van achteraf")

opdrachtCommandLine("2.3")
let someKittens4 = "De nieuwe kittens zijn zo schattig!"

kittens = someKittens4.split(" ")

console.log(kittens)
