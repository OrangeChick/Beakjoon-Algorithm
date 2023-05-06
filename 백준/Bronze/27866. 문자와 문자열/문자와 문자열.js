const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

console.log(arr[0][arr[1]-1]);