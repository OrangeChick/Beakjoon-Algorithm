const [a, b] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((i) => parseInt(i));
let i = a;
let j = b;

function gcb(a, b) {
  let c = 0;
  while (b !== 0) {
    c = a % b;
    a = b;
    b = c;
  }
  return a;
}

console.log(gcb(i, j));
console.log((i * j) / gcb(i, j));