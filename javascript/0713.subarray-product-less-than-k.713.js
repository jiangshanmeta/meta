/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    // 双指针 left乘积小于k的子序列的开始 right-1 乘积小于子序列的结尾
    let left = 0;
    let right = 0;
    let product = 1;
    let result = 0;
    while(left<nums.length){
        while(right<nums.length && product*nums[right]<k){
            product *= nums[right++];
        }
        if(right === left){
            // nums[left]实在太大了 把这个值跳过
            right++;
            left++;
        }else{
            // 以left为开始的所有满足的子序列
            result += right-left;
            // left++ 
            product /= nums[left++];    
        }
    }
    return result;
};