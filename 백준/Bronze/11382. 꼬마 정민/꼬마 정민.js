const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

const answer = arr.reduce((arr, cur) => Number(arr) + Number(cur))
console.log(answer);