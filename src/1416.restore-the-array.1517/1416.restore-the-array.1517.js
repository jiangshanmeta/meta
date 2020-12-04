/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const mod = 10 ** 9 + 7;
var numberOfArrays = function (s, k) {
    const dp = new Array(s.length + 1).fill(0);
    dp[0] = 1;
    const maxLength = k.toString().length;
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j > -1; j--) {
            if (i - j + 1 > maxLength) {
                break;
            }
            if (s[j] === '0') {
                continue;
            }
            const num = +s.slice(j, i + 1);
            if (num > k) {
                break;
            }
            dp[i + 1] = (dp[i + 1] + dp[j]) % mod;
        }
    }
    return dp[s.length];
};
