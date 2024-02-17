function solution(s) {
    // 단어 s의 가운데 글자를 반환하는 함수
    // 단어의 길이가 짝수라면 가운데 두글자를 반환 slice쓰나?
    // 입출력 예
    // s	    return
    //"abcde"	"c"
   // "qwer"    "we"
    // let answer = '';
    // 가운데 위치 찾기 
    let middle = Math.floor(s.length / 2);
    // 짝수인 경우 가운데 2글자 반환 ..[0.1.2.3] 4/2
    if (s.length % 2 === 0) {
        return s.slice(middle - 1, middle + 1);
        // 홀수인 경우 가운데 한글자만 반환..
    } else {
        return s.charAt(middle);
    }

    // return answer;
}