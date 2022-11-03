const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

const reverseNum = arr.map(origin => origin.split('').reverse().join(''));
console.log(Math.max(...reverseNum));