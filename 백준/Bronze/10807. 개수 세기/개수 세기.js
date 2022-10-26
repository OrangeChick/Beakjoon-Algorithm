const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let answer = 0;
let numArr = arr[1].split(' ');

for(let i = 0; i < numArr.length; i++){
    if(numArr[i] === arr[2]) answer++;
}

console.log(answer);