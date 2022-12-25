const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(num => parseInt(num));
 
const number = input.shift();
const sorted = input.sort((a, b) => a - b);
 
for (let i = 0; i < number; i++) {
console.log(sorted[i]);
}