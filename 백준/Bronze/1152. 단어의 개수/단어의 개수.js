const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

console.log(arr[0] === "" ? 0 : arr.length);