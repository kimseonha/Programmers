function solution(angle) {
    // 0도 초과 90도 미만은 예각, 90도는 직각, 
    //90도 초과 180도 미만은 둔각 180도는 평각으로 분류합니다.
    if (angle > 0 && angle < 90) {
        return 1;
    } else if (angle === 90) {
        return 2;
    } else if (angle < 180) {
        return 3;
    } else {
        return 4;
    }
}