function solution(my_string, alp) {
    let answer = [];
    
    for(i = 0; i < my_string.length; i++){
        my_string[i] === alp ? answer.push(alp.toUpperCase()) : answer.push(my_string[i]);
    }
    
    return answer.join('');
}