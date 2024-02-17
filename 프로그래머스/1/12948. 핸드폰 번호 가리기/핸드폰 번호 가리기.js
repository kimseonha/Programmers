function solution(phone_number) {
    // 전화번호가 문자열 phone_number
    // 전화번호의 뒷 4자리를 제외한 
    // 나머지 숫자를 전부 *으로 가린 (문자열)을 리턴
    // 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가리는거? 반복해서 생성 repeat
    let symbol = '*'.repeat(phone_number.length - 4); // 확인필요
    // 마지막 자리 4자리 숫자 표시
    let last = phone_number.slice(-4);
    
    return symbol + last;
}