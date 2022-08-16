var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var year = parseInt(input[0]);

console.log(year - 543);