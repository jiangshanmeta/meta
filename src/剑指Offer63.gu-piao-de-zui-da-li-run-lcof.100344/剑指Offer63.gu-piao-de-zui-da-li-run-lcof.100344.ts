function maxProfit(prices: number[]): number {
    if(prices.length === 0){
        return 0;
    }
    let prevMin = prices[0];
    let result = 0;
    for(let i=1;i<prices.length;i++){
        if(prices[i]>prevMin){
            result = Math.max(result,prices[i]-prevMin);
        }else if(prices[i]<prevMin){
            prevMin = prices[i];
        }
    }
    return result;
};