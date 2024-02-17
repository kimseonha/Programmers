function solution(numbers) {
    // 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers
    // numbers에서 
    // 배열에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return
    let answer = 0;
    // 0~9 까지 반복하는 동안에
    for (let i = 0; i <= 9; i++) {
        // numbers에 반복하는 동안에 숫자가i가 포함되어있지 않으면?
        // includes() 메소드는 => 포함하고 있으면 true/ 포함하고 있지 않으면 false
        if(!numbers.includes(i)) {
            answer += i;
            // answer에 없는 숫자 i를 더한다
        }
    }
    // 완벽하게 풀고 화장실 다녀옴 총총
    return answer;
}