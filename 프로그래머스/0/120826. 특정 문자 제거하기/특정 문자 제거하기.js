function solution(my_string, letter) {
    // my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
    return my_string.split(letter).join('');
}