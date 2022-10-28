const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const sortArr = arr.sort(function(a, b){return a-b});
let sum = 0;

// 평균 구하기
for(let i = 0; i < sortArr.length; i++){
    sum += Number(sortArr[i]);
}
const average = sum / sortArr.length;

console.log(average);

// 중앙값 구하기
const midIndex = Math.floor(sortArr.length / 2);

console.log(sortArr[midIndex]);