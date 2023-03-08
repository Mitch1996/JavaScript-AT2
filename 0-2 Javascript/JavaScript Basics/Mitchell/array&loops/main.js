let getallen = [0, 1, 2, 3, 5, 6, 7, 8, 9, 10];

console.log(getallen);

let fruit = ["Appelssss", "Aardbei", "banaan", "peer"];

console.log(fruit);

console.log(fruit[0], fruit[1]);

let random = Math.floor(Math.random() * getallen.length);

console.log(random);

let random2 = random % fruit.length;

console.log(random2);

let verander = (fruit[0] = fruit[3].slice);

let verander2 = ([fruit[0], fruit[1]] = [fruit[1], fruit[0]]);

let temp = fruit[0];
fruit[0] = fruit[1];
fruit[1] = temp;

console.log("fruit = " + " " + fruit[random2]);

console.log("lengte" + " " + fruit.length);

console.log(verander);

console.log(fruit);

// Opdracht 5.2

const dutchSpots = ["Voetbal", "Hockey", "Schaatsen"];

for (i = 0; i < dutchSpots.length; i++) {
  console.log(i);
}

for (const index in dutchSpots) {
  console.log(index);
}

for (const index of dutchSpots) {
  console.log(index);
}

for (let index = 1; index <= 20; index++) {
  if (index % 2 == 0) {
    console.log(index);
  }
}

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(j);
  }
}

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(j * i);
  }
}

const fibonacci = [0, 1];

for (let i = 2; i < 50; i++) {
  const a = fibonacci[i - 1];
  const b = fibonacci[i - 2];
  fibonacci.push(a + b);
}

console.log(fibonacci);

function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

const arr = [2, 7, 5, 10, 4, 9, 3, 1, 8, 6];
console.log(bubbleSort(arr));

// Opdracht 5.3

// 1. Voeg Zeilen en Zwemmen toe aan het einde van het array
dutchSpots.push("Zeilen", "Zwemmen");
console.log(dutchSpots);

// 2. Voeg Volleybal toe aan het begin van het array
dutchSpots.unshift("Volleybal");
console.log(dutchSpots);

// 3. Maak een nieuw array ballSports, met de balsporten uit dutchSports
const ballSports = dutchSpots.filter((sport) => sport.includes("bal"));
console.log(ballSports);

// 4. Verwijder die items uit dutchSports.
dutchSpots.splice(0, ballSports.length);
console.log(dutchSpots);

// 5. Sorteer het dutchSports array.
dutchSpots.sort();
console.log(dutchSpots);

// 6. Log elk item in de console.
dutchSpots.forEach((sport) => console.log(sport));

// 7. Maak een nieuw array sportsLength, met daarin de lengte van elk item in het dutchSports array.
const sportsLength = dutchSpots.map((sport) => sport.length);
console.log(sportsLength);

/*
In dit voorbeeld worden de volgende Array methods gebruikt:

push() - voegt nieuwe elementen toe aan het einde van het array.
unshift() - voegt een nieuw element toe aan het begin van het array.
filter() - maakt een nieuw array met elementen die aan de gegeven voorwaarde voldoen.
splice() - verwijdert of vervangt elementen in een array.
sort() - sorteert de elementen in een array.
forEach() - voert een functie uit voor elk element in een array.
map() - maakt een nieuw array door een functie toe te passen op elk element in een bestaand array. 
*/

//Opdracht 5.4

// Array-Like Object
const arrayLikeObj = {
  0: "eerste",
  1: "tweede",
  2: "derde",
  length: 3,
};

// Gebruik Array.from() om een nieuw array te maken
const newArray = Array.from(arrayLikeObj);
console.log(newArray);

// Voorbeelden van Array methods

// filter() - maakt een nieuw array met elementen die aan de gegeven voorwaarde voldoen
const filteredArray = newArray.filter((item) => item !== "tweede");
console.log(filteredArray);

// find() - geeft het eerste element in een array terug dat aan de gegeven voorwaarde voldoet
const foundItem = newArray.find((item) => item === "derde");
console.log(foundItem);

// some() - geeft true terug als ten minste één element in een array aan de gegeven voorwaarde voldoet
const someResult = newArray.some((item) => item === "tweede");
console.log(someResult);

// every() - geeft true terug als alle elementen in een array aan de gegeven voorwaarde voldoen
const everyResult = newArray.every((item) => typeof item === "string");
console.log(everyResult);

// includes() - geeft true terug als een array een bepaald element bevat
const includesResult = newArray.includes("eerste");
console.log(includesResult);
