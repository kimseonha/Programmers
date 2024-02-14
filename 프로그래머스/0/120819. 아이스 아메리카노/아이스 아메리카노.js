function solution(money) {
    // let answer = [];
    // 머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열을 return 
    // 아이스 아메리카노는 한잔에 5,500원
    const coffeePrice = 5500;
    // 머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수
    const Maxcoffee = Math.floor(money / coffeePrice);
    // 남는 돈
    const Rmoney = money % coffeePrice;
    
    return [Maxcoffee, Rmoney];
}