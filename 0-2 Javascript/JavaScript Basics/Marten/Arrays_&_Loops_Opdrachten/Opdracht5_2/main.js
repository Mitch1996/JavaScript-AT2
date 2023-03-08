function logOpdracht(opdracht){
    console.log("Opdracht " + opdracht + ":")
}

logOpdracht("5.2.1")
const dutchSports = ["Voetbal","Hockey","Schaatsen"]

dutchSports.forEach(sport => console.log(sport))


logOpdracht("5.2.2")
for(const index in dutchSports){
    console.log(dutchSports[index])
}

for(const item of dutchSports){
    console.log(item)
}

logOpdracht("5.2.3")
for(let i = 1; i < 21; i++){
    if(i % 2 == 0){
        console.log(i)
    }
}

logOpdracht("5.2.4")
for(let i = 1; i <= 3; i++){
    for(let j = 1; j < 11; j++){
        console.log(j)
    }
}

logOpdracht("5.2.5")
for(let i = 1; i <= 3; i++){
    for(let j = 1; j < 11; j++){
        console.log(j*i)
    }
}


logOpdracht("5.2.6")
let fibonaci = [0,1]

while(fibonaci.length <=50){
    fibonaci.push(fibonaci[fibonaci.length -1]+fibonaci[fibonaci.length -2])
}

console.log(fibonaci)

let unsorted = [2,7,5,10,4,9,3,1,8,6]

function swapElements(arr, indexA, indexB) {
    var temp = arr[indexA]
    arr[indexA] = arr[indexB]
    arr[indexB] = temp
}

function bubbleSort(array){
    for(i = 0; i < array.length -1; i++){
        for(j=0; j < array.length - i - 1;j++){
            if(array[j] > array[j+1]){
                swapElements(array,j,j+1)
            }
        }
    }
}
bubbleSort(unsorted)
console.log(unsorted)