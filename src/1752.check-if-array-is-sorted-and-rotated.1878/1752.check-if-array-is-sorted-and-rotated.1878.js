/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let breakd = false;
    for(let i=1;i<nums.length;i++){
        if(nums[i]<nums[i-1]){
            if(breakd){
                return false;
            }
            if(nums[nums.length-1]>nums[0]){
                return false;
            }
            breakd = true;
        }
    }
    return true;
};