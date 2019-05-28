/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 老老实实做就好了
var findMaxAverage = function(nums, k) {
    let endIndex = k-1;
    let maxSum = 0;
    for(let i=0;i<k;i++){
        maxSum += nums[i];
    }
    let curSum = maxSum;
    
    for(let i=k;i<nums.length;i++){
        curSum += nums[i]-nums[i-k];
        if(curSum>maxSum){
            maxSum = curSum;
        }
    }
    
    return maxSum/k;
};