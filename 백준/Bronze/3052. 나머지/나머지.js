const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const restNum = arr.map(num => num % 42);
const setNum = [...new Set(restNum)];

console.log(setNum.length);