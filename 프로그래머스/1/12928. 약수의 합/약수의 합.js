function solution(n) {
    let answer = 0; 
    // 1부터~ n 까지의 반복문
    for (let i = 1; i <= n; i++) {
        // n 나머지 연산자 i 가 0 ? => answer + 
        if (n % i === 0) {
            answer += i;
        }
    }
    return answer;
}