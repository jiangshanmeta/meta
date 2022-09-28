/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let total = 0;
    let index = 0;
    while (index < prices.length) {
        const startIndex = index++;
        let last = prices[startIndex];
        // 只要单调递增，对total增加就有就有利
        while (index < prices.length && prices[index] > last) {
            last = prices[index++];
        }
        total += prices[index - 1] - prices[startIndex];
    }
    return total;
};
