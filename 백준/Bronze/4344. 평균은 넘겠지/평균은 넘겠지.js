const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

for(let i = 0; i < arr.length; i++){
    const scoreArr = arr[i].split(' ');
    const scoreLength = scoreArr.length - 1;

    let sum = 0;
    for(let i = 1; i < scoreArr.length; i++){
        sum += Number(scoreArr[i])
    }

    const average = parseInt(sum / scoreLength);
    const result = [];

    for(let i = 1; i < scoreArr.length; i++){
        if(scoreArr[i] > average) result.push(scoreArr[i])
    }

    const answer = result.length / scoreLength * 100;
    console.log(answer.toFixed(3)+'%');
}
