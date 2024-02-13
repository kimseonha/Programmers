function solution(n) {
    // 반복문을 돌리면서 x를 점차 늘려가야할 것같습니다!
    for (let x = 1; x <= n - 1; x++) {
        if (n % x === 1) {
            return x;
    }
    }

    // 만일 n을 x로 나눠서 나머지가 1이 되는 수를 찾는다면

    // 그  값을 반환해줘야 할 것 같습니다.
}