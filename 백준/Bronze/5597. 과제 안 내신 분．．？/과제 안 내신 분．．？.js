const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let studentNum = [];
for(let i = 1; i <= 30; i++){
    studentNum.push(String(i));
}

let answer = studentNum.filter(rest => !arr.includes(rest));
for(let i = 0; i < answer.length; i++){
    console.log(answer[i]);
}