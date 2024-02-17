function solution(s) {
    // 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴
    //  대문자는 소문자보다 작은 것으로 간주 /reverse
    // var answer = '';
    return s.split('').sort().reverse().join('');
    
}