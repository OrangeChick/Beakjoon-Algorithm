let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);

console.log(Math.max(...input));
console.log(input.indexOf(Math.max(...input)) + 1);