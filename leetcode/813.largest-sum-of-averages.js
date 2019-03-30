/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
// 动态规划
var largestSumOfAverages = function(A, K) {
    // 两个维度 一个是子数组的长度 一个是可使用的分组的个数
    const dp = new Array(K+1);
    for(let i=0;i<K+1;i++){
        dp[i] = new Array(A.length+1).fill(-Infinity);
    }
    dp[0][0] = 0;
    for(let i=1;i<K+1;i++){
        for(let j=1;j<A.length+1;j++){
            // 在可使用分组个数一定(i一定) 数组长度一定条件下(j一定)
            // 划分子问题 第k个元素以后的一组 前面的分为(i-1)组
            // k从0取到j-1
            let max = -Infinity;
            let sum = 0;
            for(let k=j-1;k>-1;k--){
                sum += A[k];
                max = Math.max(max,dp[i-1][k]+sum/(j-k));
            }
            dp[i][j] = max;
        }
    }

    return dp[K][A.length]
};