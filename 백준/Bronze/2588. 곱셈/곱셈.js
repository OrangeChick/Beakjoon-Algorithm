const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const a = parseInt(input[0]);
const b = parseInt(input[1]).toString().split('');

let sum = 0;
for(let i = 0; i < b.length; i++){
    sum = (a * Number(b[0]) * 100) + (a * Number(b[1]) * 10) + (a * Number(b[2]))
};

console.log(a * Number(b[2]));
console.log(a * Number(b[1]));
console.log(a * Number(b[0]));
console.log(sum);