/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let rst = 0;
    for(let i=0;i<nums.length;i++){
        rst ^= nums[i]
    }
    return rst;
};