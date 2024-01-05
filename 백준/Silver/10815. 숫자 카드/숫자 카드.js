const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const cardList = Number(arr[2]);

let ownedCard = new Set(arr[1].split(' ').map(Number));
let card = arr[3].split(' ').map(Number);

let answer = [];

for(let i = 0; i < cardList; i++){
    if(ownedCard.has(card[i])){
        answer.push(1)
    } else{
        answer.push(0);
    }
}

console.log(answer.join(' '));