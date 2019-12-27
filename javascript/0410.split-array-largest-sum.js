/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
    const dp = new Array(nums.length);
    // 计算区间和用的 前缀和数组 有道相关题目
    const rangeSum = new Array(nums.length+1);
    rangeSum[0] = 0;
    rangeSum[1] = nums[0];
    dp[0] = nums[0];
    for(let i=1;i<nums.length;i++){
        dp[i] = dp[i-1]+nums[i];
        rangeSum[i+1] = dp[i]; 
    }

    if(m === 1){
        return dp[nums.length-1];
    }
    // dp[i][j] = min(dp[i-1][k],range_sum(k+1,j) )    i-2=<k<j
    // range_sum基于rangeSum数组计算
    for(let i=2;i<=m;i++){
        for(let j=nums.length-1;j>=i-1;j--){
            dp[j] = Infinity;
            for(let k=i-2;k<j;k++){
                dp[j] = Math.min(
                    dp[j],
                    Math.max(dp[k],rangeSum[j+1]-rangeSum[k+1])
                );
            }
        }
    }
    
    return dp[nums.length-1];
};