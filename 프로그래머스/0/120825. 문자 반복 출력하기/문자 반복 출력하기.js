function solution(my_string, n) {
    let answer = '';
    for (let i = 0; i < my_string.length; i++) {
        for (let j = 0; j < n; j++) {
            console.log(my_string[i]);
            answer += my_string[i];
        }
    }
    return answer;
}