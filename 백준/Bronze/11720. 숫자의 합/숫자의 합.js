let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let numberArr = input[1].split('');
let answer = numberArr.reduce((acc, cur) => Number(acc) + Number(cur));

console.log(answer);