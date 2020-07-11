/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let ele = nums[0];
    let count = 1;
    for(let i=1;i<nums.length;i++){
        if(nums[i] === ele){
            count++;
        }else if(count>0){
            count--;
        }else{
            ele = nums[i];
            count = 1;
        }
    }
    
    return ele;
};