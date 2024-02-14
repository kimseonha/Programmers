function solution(price) {

    let totalprice = 0;
    
    if (price >= 500000) {
        totalprice = price - (price * 20 / 100);  
    } else if (price >= 300000) {
        totalprice = price - (price * 10 / 100); 
    } else if (price >= 100000) {
        totalprice = price - (price * 5 / 100);
        //     전체값 - ( 전체값 x 5% );
    }else{
        totalprice = price;
    }
    return Math.floor(totalprice);
}