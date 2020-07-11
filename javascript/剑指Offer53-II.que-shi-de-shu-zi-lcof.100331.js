/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let index = 0;
    while(index<nums.length){
        const num = nums[index];
        if(num === index || num>nums.length || num<index || nums[num] === num){
            index++;
            continue;
        }
        nums[index] = nums[num];
        nums[num] = num;
    }
    
    for(let i=0;i<nums.length;i++){
        if(nums[i] !== i){
            return i;
        }
    }
    return nums.length;
};