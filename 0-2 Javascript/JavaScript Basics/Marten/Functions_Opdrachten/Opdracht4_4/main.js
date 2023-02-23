namen = ["Malika", "Rop", "Natasha", "Lara", "Marten"]

function naamVergelijker(naam) {
  if (namen.indexOf(naam) > -1) {
    return naam + " zit in mijn groepje"
  } else {
    return naam + " zit niet in mijn groepje"
  }
}

function displayOnScreen() {
  element = document.getElementById("inner")
  console.log(element.innerText)
  element.innerText = naamVergelijker("Natasha")
}

displayOnScreen()

let naamVergelijker2 = naam => {
  if (namen.indexOf(naam) > -1) {
    return naam + " zit in mijn groepje"
  } else {
    return naam + " zit niet in mijn groepje"
  }
}

let displayOnScreen2 = () => {
  element = document.getElementById("inner")
  console.log(element.innerText)
  element.innerText = naamVergelijker2("Natasha")
}
