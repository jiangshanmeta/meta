/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
    const maxSum = nums.reduce((sum,item)=>{
        sum += item;
        return sum;
    },0);
    // 似乎默认S>0
    // S>maxSum不可能
    if(S>maxSum){
        return 0;
    }
    
    // [-maxSum,maxSum] 所以2*maxSum+1个数据
    let dp = new Array(2*maxSum+1).fill(0);
    // 初始状态
    dp[nums[0]+maxSum]++;
    dp[-nums[0]+maxSum]++;
    // 每一个nums[i]对应一个状态
    for(let i=1;i<nums.length;i++){
        // 衍生出下一个状态
        let newDp = new Array(2*maxSum+1).fill(0);
        for(let j=0;j<2*maxSum+1;j++){
            if(dp[j]>0){
                // 在上一个状态基础上更新
                newDp[j+nums[i]] += dp[j];
                newDp[j-nums[i]] += dp[j];
            }
        }
        dp = newDp;
    }
    return dp[S+maxSum];
};