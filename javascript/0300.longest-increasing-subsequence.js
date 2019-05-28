/**
 * @param {number[]} nums
 * @return {number}
 */
// 从第i个节点向后看 如果第j个节点值比低i个节点值大(即可构成增长子序列) 
// 那 以i节点为开头 j节点为第二个节点的增长子序列的最大长度 是以 j节点为开头的最大增长子序列长度+1
var lengthOfLIS = function(nums) {
    if(nums.length === 0){
        return 0;
    }
    const dp = new Array(nums.length).fill(1);
    for(let i=nums.length-2;i>-1;i--){
        for(let j=i+1;j<nums.length;j++){
            if(nums[j]>nums[i] && dp[j]+1>dp[i]){
                dp[i] = dp[j]+1;
            }
        }
    }
    return Math.max(...dp);
};


/**
 * @param {number[]} nums
 * @return {number}
 */
// 这个实现是以第i个节点为结尾 从前向后找比他小的节点j
// 构成以i节点为最后节点 j节点为倒数第二个节点的增长子序列
// 以j节点为倒数第二个节点 i节点为最后节点的最长增子序列长度为 以j节点为结尾的LIS+1
var lengthOfLIS = function(nums) {
    if(nums.length === 0){
        return 0;
    }
    const dp = new Array(nums.length).fill(1);

    for(let i=1;i<nums.length;i++){
        for(let j=0;j<i;j++){
            if(nums[i]>nums[j] && dp[j]+1>dp[i]){
                dp[i] = dp[j]+1;
            }
        }
    }
    return Math.max(...dp);
};