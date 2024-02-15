function solution(numbers) {
    //  numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return
    //  저 배열을 내림차순 으로 정렬해서
    numbers.sort((a, b) => b - a);
    // 그 인덱스 * [0],[1];
    return numbers[0] * numbers[1];
}