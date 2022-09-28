/**
 * @param {number[]} prices
 * @return {number}
 */
var getDescentPeriods = function (prices) {
    let result = 0;
    let index = 0;
    while (index < prices.length) {
        const startIndex = index++;
        while (index < prices.length && prices[index] + 1 === prices[index - 1]) {
            index++;
        }
        const count = index - startIndex;
        result += count * (count + 1) / 2;
    }
    return result;
};
