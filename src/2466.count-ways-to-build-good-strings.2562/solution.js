/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function (low, high, zero, one) {
    const dp = new Array(high + 1).fill(0);
    dp[0] = 1;
    const mod = 10 ** 9 + 7;
    for (let i = 1; i < dp.length; i++) {
        if (i - zero > -1) {
            dp[i] = dp[i - zero];
        }
        if (i - one > -1) {
            dp[i] = (dp[i - one] + dp[i]) % mod;
        }
    }

    let result = 0;
    for (let i = low; i < dp.length; i++) {
        result = (result + dp[i]) % mod;
    }

    return result;
};
