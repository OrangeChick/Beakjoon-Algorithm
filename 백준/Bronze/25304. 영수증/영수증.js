const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let sum = 0;
for(let i = 2; i < arr.length; i++){
    sum += Number(arr[i].split(' ')[0]) * Number(arr[i].split(' ')[1]);
};

if(sum === Number(arr[0])) return console.log('Yes');
return console.log('No');