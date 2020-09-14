/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
    const result = [];
    const stackIndex = [];
    for (let i = 0; i < prices.length; i++) {
        while (stackIndex.length && prices[stackIndex[stackIndex.length - 1]] >= prices[i]) {
            const index = stackIndex.pop();
            result[index] = prices[index] - prices[i];
        }
        result.push(prices[i]);
        stackIndex.push(i);
    }
    return result;
};
