function solution(n) {
    //  "수박수박수박수...."와 
    // 같은 패턴을 유지하는 문자열을 리턴하는 함수
    // n이 4이면 "수박수박"을 리턴하고
    //     3이라면 "수박수"를 리턴
    let answer = '';
    for (let i = 0; i < n; i++) {
        // 짝수이면 "수" / 홀수이면 "박"을 삼항연상자로?
        answer += (i % 2 === 0) ? "수" : "박"
    }
    return answer;
}