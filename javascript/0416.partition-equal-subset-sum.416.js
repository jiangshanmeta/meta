/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const sum = nums.reduce((sum,item)=>{
        sum += item;
        return sum;
    },0);
    // 和为奇数 无法均分
    if(sum&1){
        return false;
    }
    const target = sum >> 1;
    const dp = new Array(target+1).fill(false);
    dp[0] = true;
    // 按照nums遍历，每个num只使用一次
    for(let i=0;i<nums.length;i++){
        // 倒序遍历，保证本次使用掉nums[i] 前面的元素dp[j]不影响后面的元素dp[j] (没有生成新的dp数组)
        for(let j=target;j>=nums[i];j--){
            // 状态转移方程，使用掉nums[i]看dp[j]能否达到
            dp[j] = dp[j] || dp[j-nums[i]];
        }
    }
    return dp[target];
};