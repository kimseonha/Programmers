function solution(price, money, count) {
    let total_cost = 0; 
    for (let i = 1; i <= count; i++) {
        // 이용 횟수마다의 비용을 총 비용에 더함
        total_cost += price * i;
    }
    // 모자란돈 (부족한금액)계산
    const insufficient_cost = total_cost - money;
    if (insufficient_cost > 0) {
        // 얼마가 모자라는지를 return
        return insufficient_cost; 
    } else {
        return 0; 
    }
}