/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let max = 0;
    // min是之前遇到的最小值
    let min = prices[0];
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min) {
            // 更新最小值
            min = prices[i];
        } else if (prices[i] - min > max) {
            // 更新收益最大值
            max = prices[i] - min;
        }
    }
    return max;
};
