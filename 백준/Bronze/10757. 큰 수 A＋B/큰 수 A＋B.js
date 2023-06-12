const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

const num1 = BigInt(arr[0]);
const num2 = BigInt(arr[1]);

const answer = num1 + num2;

console.log(answer.toString());