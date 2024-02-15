function solution(strlist) {
    // strlist 각 원소의 길이를 담은 배열을 retrun
    var answer = [];
    
    for (let i = 0; i < strlist.length; i++) {
        // console.log(strlist[i].length);
        answer.push(strlist[i].length);
    }
    return answer;
}