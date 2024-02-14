function solution(x, n) {
    let answer = [];
    // 1부터 n 만큼 반복하는 반복문
    for (let i = 1; i <= n; i++) {
        answer.push(x * i) // * 
    }
    // answer.push(x * 1); 1
    // answer.push(x * 2); 2
    // answer.push(x * 3); 3
    // answer.push(x * 4); 4
    // answer.push(x * 5); 5
    
    // push를 이용해서 answer 빈배열에 넣어주면 되겠죠? 
    return answer;
}