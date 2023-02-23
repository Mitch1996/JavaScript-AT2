function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

document.getElementById("demo2").innerHTML = Math.min(5, 10);

document.getElementById("demo3").innerHTML = Math.max(5, 10);
