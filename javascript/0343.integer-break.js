/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    const dp = new Array(n+1).fill(0);
    dp[1] = 1;
    for(let i=2;i<n+1;i++){
        // 对于数字i 可以分为两份
        // 一份取值范围为 1～(i-1) 记为j 
        // 另一份为i-j
        // 对于j和i-j既可以向下拆分 也可以不拆分
        // 拆分就对应dp[j] dp[i-j] 不拆分对应 j i-j
        for(let j=1;j<=i-j;j++){
            dp[i] = Math.max(dp[i],dp[j]*dp[i-j],j*(i-j),j*dp[i-j],dp[j]*(i-j));
        }
    }
    return dp[n];
};