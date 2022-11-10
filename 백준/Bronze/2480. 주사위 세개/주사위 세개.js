const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const splitNumberArr = input.split(' ').map(num => Number(num));
const diceNumberArr = [...new Set(splitNumberArr)];

if(diceNumberArr.length === 1) { console.log(10000 + diceNumberArr[0]*1000) }
else if (diceNumberArr.length === 3) { console.log(Math.max(...diceNumberArr) * 100) }
else if(splitNumberArr[0] === splitNumberArr[1] || splitNumberArr[0] === splitNumberArr[2]){console.log(1000 + splitNumberArr[0] * 100)}
else if(splitNumberArr[1] === splitNumberArr[2]) { console.log(1000 + splitNumberArr[1] * 100) }