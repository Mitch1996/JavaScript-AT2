/*if (typeof document !== "undefined") {
    let result = document.getElementById("invoer").value;
}*/
//var result = document.getElementById("invoer").value;
document.getElementById("invoer").onchange = function() {invoerText()};
//document.getElementById("invoer").oninput = function() {invoerText()}; Je ziet hier wat er staat en wat er bij iedere toetsaanslag word gedaan, letter verwijderd of toegevoegd



function invoerText() {
    switch (document.getElementById("invoer").value){
        case "Efisio" :
            console.log("Naam komt in lijstje voor !");
            break;
        case "Katia" :
            console.log("Naam komt in lijstje voor !");
            break;
        case "Muhammed" :
            console.log("Naam komt in lijstje voor !");
            break;
        case "Carla" :
            console.log("Naam komt in lijstje voor !");
            break;
        default :
            console.log("Naam komt niet in lijstje voor !");
            break;
    }
}

function showResult() {
    var errorMsg = "<div>Naam komt niet in lijstje voor !</div>";
    var lijstMsg = "<div>Naam komt in lijstje voor !</div>";
    invoerText()

}
