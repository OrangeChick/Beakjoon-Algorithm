const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const numSize = input[0];
const nums = input[1].split(' ').map(Number);

const answerArr = nums.sort((a, b) => a - b);
console.log(answerArr[0], answerArr[numSize - 1]);