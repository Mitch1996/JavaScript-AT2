function opdrachtCommandLine(opdrachtId) {
  console.log("Opdracht: " + opdrachtId)
}

function verwachtingCommandLine(verwachting) {
  console.log("Verwachting: " + verwachting)
}

opdrachtCommandLine(3.1)
console.log("1. == vergelijkt de waarden en === vergelijkt de waarden en het datatype.")

console.log("2. > en < betekenen groter en kleiner dan en <= en >= betekenen hetzelfde alleen dan ook nog eens gelijk aan.")

let x = 4
let y = 8

if (x == 4 && y == 8) {
  console.log("3. Result!")
}

if (x == 4 || y == 8) {
  console.log("4. Result!")
}

if (x != 4 || y != 8) {
  console.log()
} else {
  console.log("5. Result!")
}

console.log("6. Niet als je dezelfde decision flow wil houden.")

let z = 39

if (z > 5 && z < 10) {
  console.log("7. Waarde = " + z)
} else if (z >= 11 && z <= 20) {
  console.log("8. Waarde = " + z)
} else if ((z = 21 || z == 23)) {
  console.log("9. Waarde = " + z)
} else if (z < 35 || (z > 40 && z < 45)) {
  console.log("10. Waarde = " + z)
}

if (z > 5 && z < 10) {
  console.log("11. Waarde = " + z)
}
if (z >= 11 && z <= 20) {
  console.log("11. Waarde = " + z)
}
if ((z = 21 || z == 23)) {
  console.log("11. Waarde = " + z)
}
if (z < 35 || (z > 40 && z < 45)) {
  console.log("11. Waarde = " + z)
}
console.log("11. Waarden worden meerdere keren afgevangen.")

opdrachtCommandLine("3.2.1")

let a = 1

if (a == 3) {
  console.log(a + " is 3")
} else if (a > 4) {
  console.log(a + " is groter dan 4")
} else if (a > 11) {
  console.log(a + " is groter dan 11")
} else if (a < 3) {
  console.log(a + " is kleiner dan 3")
}

opdrachtCommandLine("3.2.2")
a = 2

if (a == 3) {
  console.log(a + " is 3")
} else if (a > 4) {
  console.log(a + " is groter dan 4")
} else if (a > 11) {
  console.log(a + " is groter dan 11")
} else if (a < 3) {
  console.log(a + " is kleiner dan 3")
}

a = 3

if (a == 3) {
  console.log(a + " is 3")
} else if (a > 4) {
  console.log(a + " is groter dan 4")
} else if (a > 11) {
  console.log(a + " is groter dan 11")
} else if (a < 3) {
  console.log(a + " is kleiner dan 3")
}

a = 4

if (a == 3) {
  console.log(a + " is 3")
} else if (a > 4) {
  console.log(a + " is groter dan 4")
} else if (a > 11) {
  console.log(a + " is groter dan 11")
} else if (a < 3) {
  console.log(a + " is kleiner dan 3")
}

a = 5

if (a == 3) {
  console.log(a + " is 3")
} else if (a > 4) {
  console.log(a + " is groter dan 4")
} else if (a > 11) {
  console.log(a + " is groter dan 11")
} else if (a < 3) {
  console.log(a + " is kleiner dan 3")
}

a = 20

if (a == 3) {
  console.log(a + " is 3")
} else if (a > 4) {
  console.log(a + " is groter dan 4")
} else if (a > 11) {
  console.log(a + " is groter dan 11")
} else if (a < 3) {
  console.log(a + " is kleiner dan 3")
}

console.log("De vier wordt overgeslagen")

opdrachtCommandLine(3.2)

let b = 3

if (b == 1) {
  console.log("De waarde " + b + " komt overeen met de maand januari.")
} else if (b == 2) {
  console.log("De waarde " + b + " komt overeen met de maand februari.")
} else if (b == 3) {
  console.log("De waarde " + b + " komt overeen met de maand maart.")
} else if (b == 4) {
  console.log("De waarde " + b + " komt overeen met de maand april.")
} else if (b == 5) {
  console.log("De waarde " + b + " komt overeen met de maand mei.")
} else if (b == 6) {
  console.log("De waarde " + b + " komt overeen met de maand juni.")
} else if (b == 7) {
  console.log("De waarde " + b + " komt overeen met de maand juli.")
} else if (b == 8) {
  console.log("De waarde " + b + " komt overeen met de maand augustus.")
} else if (b == 9) {
  console.log("De waarde " + b + " komt overeen met de maand september.")
} else if (b == 10) {
  console.log("De waarde " + b + " komt overeen met de maand oktober.")
} else if (b == 11) {
  console.log("De waarde " + b + " komt overeen met de maand november.")
} else if (b == 12) {
  console.log("De waarde " + b + " komt overeen met de maand december.")
} else {
  console.log("De waarde " + b + " komt niet overeen met een maand.")
}

switch (b) {
  case 1:
    console.log("De waarde " + b + " komt overeen met de maand januari.")
    break
  case 2:
    console.log("De waarde " + b + " komt overeen met de maand februari.")
    break
  case 3:
    console.log("De waarde " + b + " komt overeen met de maand maart.")
    break
  case 4:
    console.log("De waarde " + b + " komt overeen met de maand maart.")
    break
  case 5:
    console.log("De waarde " + b + " komt overeen met de maand mei.")
    break
  case 6:
    console.log("De waarde " + b + " komt overeen met de maand juni.")
    break
  case 7:
    console.log("De waarde " + b + " komt overeen met de maand juli.")
    break
  case 8:
    console.log("De waarde " + b + " komt overeen met de maand augustus.")
    break
  case 9:
    console.log("De waarde " + b + " komt overeen met de maand september.")
    break
  case 10:
    console.log("De waarde " + b + " komt overeen met de maand oktober.")
    break
  case 11:
    console.log("De waarde " + b + " komt overeen met de maand november.")
    break
  case 12:
    console.log("De waarde " + b + " komt overeen met de maand december.")
    break
  default:
    console.log("De waarde " + b + " komt niet overeen met een maand.")
    break
}

opdrachtCommandLine("3.2.5")
let x2 = 3
let results = x2 <= 4 && x2 >= 0 ? 2 : 5

console.log(results)
