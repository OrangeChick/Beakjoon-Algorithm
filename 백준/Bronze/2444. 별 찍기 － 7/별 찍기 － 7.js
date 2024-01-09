const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()


const solution = (input) => {
    let answer = [];

    for(let i = 1; i < input; i++){
        let blank = " ".repeat(input - i);
        let star = '*'.repeat(i*2-1);
        answer.push(blank + star);
    }

    for(let i = input; i >= 1; i--){
        let blank = " ".repeat(input - i);
        let star = '*'.repeat(i*2-1);
        answer.push(blank + star);
    }

    return answer.join('\n');
}

console.log(solution(input));