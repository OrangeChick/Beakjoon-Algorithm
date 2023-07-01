function solution(numbers, n) {
    var answer = numbers.reduce((acc, cur) => acc > n ? acc : acc+cur, 0)
    return answer;
}