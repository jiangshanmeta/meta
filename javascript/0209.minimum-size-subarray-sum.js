/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
// 双指针
// 时间复杂度O(n)
var minSubArrayLen = function(s, nums) {
    let sum = 0;
    let left = 0;
    let right = 0;
    let result = Infinity;
    while(left<nums.length){
        while(right<nums.length && sum<s){
            sum += nums[right++];
        }

        if(sum>=s){
            result = Math.min(result,right-left);
        }else{
            // 说明加到了最后也没有达到s 就不用看了
            break;
        }
        sum -= nums[left++];
    }
    return result === Infinity?0:result;
};