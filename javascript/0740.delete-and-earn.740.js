/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    // 数字范围[1,10000]
    // 统计每个数字出现多少次
    const counts = new Array(10001).fill(0);
    for(let i=0;i<nums.length;i++){
        counts[nums[i]]++;
    }
    const dp = new Array(10001).fill(0);
    dp[1] = counts[1];
    for(let i=2;i<10001;i++){
        dp[i] = Math.max(
            // 当前这个数字不delete 前面的数字delete
            dp[i-1],
            // 当前的数字delete
            dp[i-2]+i*counts[i]
        );
    }
    return dp[10000];
};