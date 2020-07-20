/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let index = 0;
    while(index<nums.length){
        if(nums[index] === index+1){
            index++;
            continue;
        }
        const m = nums[index];
        if(nums[m-1] === m){
            return m;
        }
        nums[index] = nums[m-1];
        nums[m-1] = m;
    }
};