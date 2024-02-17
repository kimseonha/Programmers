function solution(absolutes, signs) {
    // (절대값이들어있는)배열absolutes 1 < absolutes <1000
    // 불리언 배열signs // signs의 길이는 absolutes의 길이와 같습니다.
    // signs[i] 가 참이면 absolutes[i] 의 실제 정수가 +양수(true) / 그렇지 않으면 -음수(false) if else
    // 실제 정수들의 합을 구하여 return 
    // let answer = 123456789;
    let answer = 0;
    // signs의 길이는 absolutes의 길이와 같습니다
    for (let i = 0; i < absolutes.length; i++) {
    // signs[i] 가 참이면 absolutes[i] 의 실제 정수가 +양수(true) / 그렇지 않으면 -음수(false)         
        if (signs[i]) {
         //absolutes[i] 의 실제 정수가 +양수(true)을 엔써에 담아준다?
            answer += absolutes[i];
        } else {
            answer -= absolutes[i];
        }
    }
    return answer;
}