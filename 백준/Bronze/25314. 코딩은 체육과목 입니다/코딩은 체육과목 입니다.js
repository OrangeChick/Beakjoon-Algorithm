const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const intLength = input / 4;

const LONG = 'long ';
const result = LONG.repeat(intLength) + 'int';

console.log(result);