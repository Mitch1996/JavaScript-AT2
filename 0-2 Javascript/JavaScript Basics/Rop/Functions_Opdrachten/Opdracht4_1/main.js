let saver = document.getElementById("inputHandler");

let result;

function test(param) {
  saver = param;
  return saver * 2;
}

console.log(test(10));