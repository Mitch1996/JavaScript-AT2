

//selecteer <ul> element met classnaam menu via getElementById()
let menu = document.getElementById('menu');


//selecteer <li>elementen die descendants van het <ul> element zijn via getElementsByClassName()
let items = menu.getElementsByClassName('item');




//maak een array van de <li> elementen
let data = [].map.call(items, item => item.textContent);

//retourneerd h2 headings via Tag name
let headings = document.getElementsByTagName('h2')

//Het eerste element dat gevonden wordt
const myDiv = document.querySelector('.boodschapenlijst');

// variabele die gevuld is met een nodelist (lijst/ array) van de 5 li-elementen
const listItems = document.querySelectorAll('.list-item');









