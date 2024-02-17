function solution(arr, divisor) {
    // array의 각 element 중 divisor로 나누어 떨어지는 값을
    // 오름차순으로 정렬한 배열을 반환
    // divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환 if else
    // 
    let answer = arr.filter(sum => sum % divisor === 0).sort((a, b) => a - b);
    
    if (answer.length === 0) {
        return [-1];
    } else {
        return answer
    }
}