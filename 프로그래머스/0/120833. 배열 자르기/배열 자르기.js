function solution(numbers, num1, num2) {
    // numbers의 num1번 째 인덱스부터 
    // num2번째 인덱스까지 자른 정수 배열을 return 
    // var answer = [];
    // slice
    return numbers.slice(num1, num2 + 1);
}