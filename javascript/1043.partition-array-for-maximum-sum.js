/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var maxSumAfterPartitioning = function(A, K) {
    // dp[i+1] A[0...i]内改变后的和
    const dp = new Array(A.length+1).fill(0);
    for(let i=0;i<A.length;i++){
        let subarrayMax = A[i];
        // 子数组长度从1到K
        for(let j=0;j<K;j++){
            if(i<j){
                break;
            }
            subarrayMax = Math.max(subarrayMax,A[i-j]);
            dp[i+1] = Math.max(dp[i+1],dp[i-j]+subarrayMax*(j+1));
        }
    }

    return dp[A.length];
};