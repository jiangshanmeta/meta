/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// F(N) = ∑F(N-nums[i])
var combinationSum4 = function(nums, target) {
    if(nums.length === 0){
        return 0;
    }
    nums.sort((a,b)=>a-b);
    const dp = new Array(target+1).fill(0);
    // 处理dp[i] = nums[j]的情况，所以为1
    dp[0] = 1;
    for(let i=1;i<target+1;i++){
        // 状态转移方程的应用
        for(let j=0;j<nums.length;j++){
            // 排好序的，所以出现第一个大于的后面就不用考虑了
            if(nums[j]>i){
                break;
            }
            dp[i] += dp[i-nums[j]];
        }
    }
    return dp[target];
};