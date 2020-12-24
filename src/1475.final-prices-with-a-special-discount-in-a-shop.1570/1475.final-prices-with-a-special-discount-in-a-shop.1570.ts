function finalPrices(prices: number[]): number[] {
    const result:number[] = new Array(prices.length);
    for(let i=0;i<prices.length;i++){
        let discount = 0;
        for(let j=i+1;j<prices.length;j++){
            if(prices[j]>prices[i]){
                continue;
            }
            discount = prices[j];
            break;
        }
        result[i] = prices[i]-discount;
    }
    return result
};