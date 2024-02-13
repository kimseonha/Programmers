function solution(n){
  // n이 숫자로 들어올 거기 때문에 n을 문자열로 변환해주는 코드

  // for문을 돌려서 문자열을 순회하여 
  // for (let i = 0; i < num.length; i++) { 
  //     answer += parseInt(num[i]);
  // }
  // answer는 숫자로 나와야하기 때문에 숫자로 형변환
  return n.toString().split("").reduce((x, y) => x + Number(y), 0);
}