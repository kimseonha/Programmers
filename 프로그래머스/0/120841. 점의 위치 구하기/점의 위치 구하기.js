function solution(dot) {
    // x 좌표와 y 좌표가 모두 양수이면 제1사분면에 속합니다.
    // x 좌표가 음수, y 좌표가 양수이면 제2사분면에 속합니다.
    // x 좌표와 y 좌표가 모두 음수이면 제3사분면에 속합니다.
    // x 좌표가 양수, y 좌표가 음수이면 제4사분면에 속합니다.
    const x = dot[0];
    const y = dot[1];
    
    if (x > 0 && y > 0){
        return 1;
    } else if (x < 0 && y > 0) {
        return 2;
    } else if (x < 0 && y < 0) {
        return 3;
    } else {
        return 4;
    }
} 
