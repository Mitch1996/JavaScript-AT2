function logOpdracht(opdracht){
    console.log("Opdracht " + opdracht + ":")
}

let arrayLike = document.querySelectorAll("div")
console.log(arrayLike[0])


let newArray = Array.from(arrayLike)

console.log(newArray)

let fruitArray = ["Appel","Aardbei","Banaan","Manderijn","Sinasappel"]

function checkStartsA(word){
    return word[0] == "A" | word[0] == "a"
}

console.log(fruitArray.filter(checkStartsA))




console.log(fruitArray.find(checkStartsA))
console.log(fruitArray.some(checkStartsA))
console.log(fruitArray.every(checkStartsA))
console.log(fruitArray.includes("Banaan"))
