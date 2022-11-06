const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const numberArr = input.toString().split('').sort(function(a,b){return b-a}).join('');

console.log(numberArr);