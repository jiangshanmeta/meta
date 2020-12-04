/**
 * @param {number} n
 * @return {number}
 */
// 时间O(N)
// 空间可以压到O(1)
const mod = 10 ** 9 + 7;
var countOrders = function (n) {
    const dp = new Array(n + 1);
    dp[1] = 1;
    for (let i = 2; i < n + 1; i++) {
        // 之前有(i-1)个 即有2(i-1)个item
        // 要插入一个开始 一个结束
        // 开始可以选择的位置有 2(i-1)+1个(可以在开始和末尾插入)
        // 结束可以选择的位置有 1+2+... + (2i-1) 等差数列求和
        // 即 i(2i-1)
        // 而 i-1个有dp[i-1]种情况
        dp[i] = dp[i - 1] * (i * (2 * i - 1)) % mod;
    }
    return dp[n];
};
