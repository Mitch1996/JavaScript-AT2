//console.log("String Methods")//
//String Methods - Opdrachten//
//Opdracht 2.1://
//Splits de String met een string method op in 2 aparte zinnen. Stop beiden in een aparte variabele.
let someKittens = "De poes van de buurman heeft kittens gehad! Hij vraagt of wij nog kittens willen.";
console.log(someKittens);
let st1 = someKittens.slice(0,43);
let st2 = someKittens.slice(44,);
console.log(st1)
console.log(st2)
// Zo’n geweldig nieuws verdient upper case. Zet someKittens om naar hoofdletters.
let SomeKittens = "De poes van de buurman heeft kittens gehad! Hij vraagt of wij nog kittens willen.";;
let Upptext = SomeKittens.toUpperCase();
console.log(Upptext)
//Geef de eerste en laatste index van het woord “kittens” in de variabele someKittens.
let text1=st1
let position1 = text1.search("kittens");
console.log(position1)
let text2=st2
let position2 = text2.search("kittens");
console.log(position2)
//Gebruik charAt() op beiden. Welk teken krijg je terug?
let letter1 = text1.charAt(29);
console.log(letter1)
let letter2 = text2.charAt(23);
console.log(letter2)
//Opdracht 2.2:
//Wat doet substring() als het eerste getal hoger is dan het tweede getal?
let Text1 = "De poes van de buurman heeft kittens gehad!";
let result1 = Text1.substring(4, 1);
console.log(result1)
//Wat doet slice() als het eerste getal hoger is dan het tweede getal?
let Text2 = "De poes van de buurman heeft kittens gehad!";
let result2 = Text2.slice(4, 1);
console.log(result2)
//Wat doet substring() bij negatieve waardes?
let Text3 = "De poes van de buurman heeft kittens gehad!";
let result3 = Text3.substring(-3);
console.log(result3)
//Wat doet slice() bij negatieve waardes?
let Text4 = "De poes van de buurman heeft kittens gehad!";
let result4 = Text4.slice(-3);
console.log(result4)
//Opdracht 2.3:
let SOMEKittens = "Die nieuwe kittens zijn zo schatig!";
let splitKittens = SOMEKittens.split(" ");
console.log(splitKittens)





