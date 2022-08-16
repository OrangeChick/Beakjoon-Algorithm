const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split(" ");

let chessNum = [1, 1, 2, 2, 2, 8];
let answer = [];

for(let i = 0; i < chessNum.length; i++){
    answer.push(chessNum[i] - input[i]);
}

console.log(...answer);