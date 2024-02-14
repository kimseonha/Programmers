function solution(n) {
    // 정수
    // 정수확인Number.isInteger()
    // 제곱수 -> 
    // Math.sqrt(n)
    // n이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성;
    if (Number.isInteger(Math.sqrt(n))) {
        return 1;
    } else {
        return 2;
    }
}