
//OPDRACHT 2.1
let someKittens = "De poes van de buurman heeft kittens gehad. Hij vraagt of wij nog kittens willen.";



//Kan op deze manier
let eersteDeel = someKittens.slice(0, 43) ;
console.log(eersteDeel);

let tweedeDeel = someKittens.slice(44, 88)
console.log(tweedeDeel);

//kan ook op deze manier
console.log(someKittens.substring(0,43));
console.log(someKittens.substring(44));


let hoofdLetters = someKittens.toUpperCase();
console.log(hoofdLetters)

let index =someKittens.indexOf("kittens");
console.log(index)
let lastIndex =someKittens.lastIndexOf("kittens");
console.log(lastIndex)

let char =someKittens.charAt(29);
console.log(char)
let char2 =someKittens.charAt(66);
console.log(char2)

//OPDRACHT 2.2

let testzin = "We testen hier het verschil tussen substring en slice";

//Het laagste getal wordt als eerste teruggegeven
let test1 = testzin.substring(18, 6)
console.log(test1)
//Hier wordt niks geretourneerd
let test2 =testzin.slice(18,6)
console.log(test2)

//Hele zin wordt terruggegeven
let test3 = testzin.substring(-1)   
console.log(test3)
//wordt vanaf het eind van de zin terruggeteld
let test4 = testzin.slice(-6)   
console.log(test4)






//OPDRACHT 2.3
let someKitten = "Die kittens zijn zo schattig"
let gesplitst = someKitten.split(" ");
console.log(gesplitst);


