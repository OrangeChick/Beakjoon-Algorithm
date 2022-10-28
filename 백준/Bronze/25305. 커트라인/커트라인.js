const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let sortArr = arr[1].split(' ').sort(function(a,b){return b-a});
let indexNum = arr[0].split(' ');
let goalNumIndex = Number(indexNum[1] - 1);

console.log(sortArr[goalNumIndex]);