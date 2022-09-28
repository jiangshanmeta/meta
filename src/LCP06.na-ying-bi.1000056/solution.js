/**
 * @param {number[]} coins
 * @return {number}
 */
var minCount = function (coins) {
    let result = 0;
    for (let i = 0; i < coins.length; i++) {
        let coin = coins[i];
        if (coin & 1) {
            coin++;
        }
        result += (coin >> 1);
    }
    return result;
};
