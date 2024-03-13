function solution(num1, num2) {
    // num1을 num2로 나눈 후 결과에 1000을 곱함
    let result = (num1 / num2) * 1000;
    return Math.floor(result);
}