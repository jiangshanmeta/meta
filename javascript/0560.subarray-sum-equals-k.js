/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let result = 0;
    let sum = 0;
    const sumMap = {};
    // 处理sum为k的情况
    sumMap[0] = 1;
    for(let i=0;i<nums.length;i++){
        sum += nums[i];
        result += (sumMap[sum-k] || 0);
        sumMap[sum] = (sumMap[sum] || 0)+1;
    }
    
    return result;
};