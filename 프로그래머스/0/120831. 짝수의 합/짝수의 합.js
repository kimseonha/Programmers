function solution(n) {
    // 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록
    let sum = 0;
    for (let i = 2; i <= n; i += 2) {
        console.log([i]);
        sum += i;
    }
    return sum;
}