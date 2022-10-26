const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const arr01 = arr[0].split(' ');
const arr02 = arr[1].split(' ');
let result = '';

for(let i = 0; i < arr02.length; i++){
    if(arr02[i] - arr01[1] < 0) result += arr02[i] + ' ';
}

console.log(result);