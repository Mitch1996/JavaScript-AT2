function myFunction() {
    console.log('Je hebt de welkom button ingedrukt')
}
let b1 = document.getElementById("b1").innerText
document.getElementById("invoer").onchange = function() {invoerText()};
//document.getElementById("invoer").oninput = function() {invoerText()}; Je ziet hier wat er staat en wat er bij iedere toetsaanslag word gedaan, ltter verwijderd of toegevoegd

/*function pressButtonOne(parameter) {
    console.log(parameter.innerText)
}     Dit is verbeterde versie van onderstaande functie*/
function pressButtonOne() {
    console.log(b1)
}

function invoerText() {
    var result = document.getElementById("invoer").value;
    console.log(result)
}

function reken(waarde){
    return waarde * 2
}

let bereken = reken
console.log(reken(3))

