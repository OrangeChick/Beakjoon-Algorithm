const input = require('fs').readFileSync('dev/stdin').toString().trim()
let answerWord = input;
const regex = [/lj/g, /c=/g, /c-/g, /dz=/g, /d-/g, /nj/g, /s=/g, /z=/g];

regex.map(str => answerWord = answerWord.replace(str, "A"));
console.log(answerWord.length);