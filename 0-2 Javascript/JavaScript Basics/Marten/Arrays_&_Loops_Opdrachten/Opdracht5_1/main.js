function logOpdracht(opdracht){
    console.log("Opdracht " + opdracht + ":")
}

logOpdracht("5.1.1")
const numberArray = [1,2,3,4,5,6,7,8,9,10]
console.log(numberArray)


logOpdracht("5.1.2")
let fruitArray = ["Appel","Aardbei","Banaan","Manderijn","Sinasappel"]
console.log(fruitArray)

logOpdracht("5.1.3")
console.log(fruitArray[0])
console.log(fruitArray[1])

logOpdracht("5.1.4")
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(fruitArray[randomIntFromInterval(0,4)])

logOpdracht("5.1.5")
console.log(fruitArray.length)

logOpdracht("5.1.7")
var index = fruitArray.indexOf("Appel")

if (index !== -1) {
    fruitArray[index] = "Peer"
}

console.log(fruitArray)

logOpdracht("5.1.8")
function swapElements(arr, indexA, indexB) {
    var temp = arr[indexA]
    arr[indexA] = arr[indexB]
    arr[indexB] = temp
}

swapElements(fruitArray,fruitArray.indexOf("Aardbei"),fruitArray.indexOf("Peer"))
console.log(fruitArray)
