// You have some coins.  The i-th coin has a probability prob[i] of facing heads when tossed.
// Return the probability that the number of coins facing heads equals target if you toss every coin exactly once.
/**
 * @param {number[]} prob
 * @param {number} target
 * @return {number}
 */
var probabilityOfHeads = function(prob, target) {
    // 二维dp dp[i][j] 表示i个骰子，j个正面
    // 为了省空间复用一个数组
    // F(i,j) = (1-prob[i])*F(i-1,j) + prob[i]*F(i-1,j-1)
    const dp = new Array(target+1).fill(0);
    dp[0] = 1-prob[0];
    dp[1] = prob[0];
    // 考虑第i个筛子，最大正面数是i+1，因为i从0开始
    for(let i=1;i<prob.length;i++){
        for(let j=Math.min(i+1,target);j>-1;j--){
            dp[j] = (1-prob[i])*dp[j]+prob[i]*(j>0?dp[j-1]:0);
        }
    }
    return dp[target];
};