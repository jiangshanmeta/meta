/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
    // dp
    let result = 0;
    let buy = -prices[0];
    let sell = 0;
    let colldown = 0;
    for (let i = 1; i < prices.length; i++) {
        const newBuy = Math.max(buy, sell - prices[i], colldown - prices[i]);
        const newSell = buy + prices[i] - fee;
        const newColldown = Math.max(colldown, sell);
        result = Math.max(result, newBuy, newSell, newColldown);
        buy = newBuy;
        sell = newSell;
        colldown = newColldown;
    }
    return result;
};
