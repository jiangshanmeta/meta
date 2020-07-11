/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // dp
    let buy = -prices[0];
    let sell = 0;
    let colldown = 0;
    let result = 0;
    for(let i=1;i<prices.length;i++){
        // 对于之后来说 是么时候买并不重要，只需要知道买了就行
        const newBuy = Math.max(buy,colldown-prices[i]);
        // 之前买了 才能卖
        const newSell = buy+prices[i];
        const newColldown = Math.max(colldown,sell);
        result = Math.max(newBuy,newSell,newColldown,result);
        buy = newBuy;
        sell = newSell;
        colldown = newColldown;
    }
    return result;
};