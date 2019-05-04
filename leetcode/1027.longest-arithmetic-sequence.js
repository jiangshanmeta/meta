/**
 * @param {number[]} A
 * @return {number}
 */
// 类似于最长增长子序列
// 时间复杂度O(n^2)
var longestArithSeqLength = function(A) {
    let result = 0;
    const dp = new Array(A.length);
    dp[0] = {};
    for(let i=1;i<A.length;i++){
        dp[i] = {};
        for(let j=0;j<i;j++){
            const delta = A[i]-A[j];
            const length = (dp[j][delta] || 1)+1;
            // dp[i][delta]表示以第i个节点为结束的公差为delta的等差数列长度
            dp[i][delta] = length;
            result = Math.max(result,length);
        }
    }
    return result;
};