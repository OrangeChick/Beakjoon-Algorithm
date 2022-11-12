let input = require('fs').readFileSync('dev/stdin').toString().split(' ');

let hour = Number(input[0]);
let minute = Number(input[1]);

minute -= 45;

if (minute < 0) {
    minute += 60;
    hour -= 1;

    if (hour === -1) {
        hour = 23;
    }
}

console.log(hour + ' ' + minute);