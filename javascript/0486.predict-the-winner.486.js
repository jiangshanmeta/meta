/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
    // dp[i][j] 在i j范围内能拿到的最大值
    const rangeSum = new Array(nums.length+1);
    rangeSum[0] = 0;
    for(let i=0;i<nums.length;i++){
        rangeSum[i+1] = rangeSum[i]+nums[i];
    }
    const dp = new Array(nums.length);
    for(let i=dp.length-1;i>-1;i--){
        dp[i] = new Array(nums.length);
        // 只有一个 所以为num[i]
        dp[i][i] = nums[i];
        for(let j=i+1;j<nums.length;j++){
            dp[i][j] = Math.max(
                // 可以选第i个 则dp[i+1][j]是另一个人的最大值 剩余范围是 i+1 j
                nums[i]+rangeSum[j+1]-rangeSum[i+1]-dp[i+1][j],
                // 可以选第j个 则dp[i][j-1]是另一个人的最大值
                nums[j]+rangeSum[j]-rangeSum[i]-dp[i][j-1]
            );
        }
    }

    return dp[0][nums.length-1]>=rangeSum[rangeSum.length-1]-dp[0][nums.length-1];
};