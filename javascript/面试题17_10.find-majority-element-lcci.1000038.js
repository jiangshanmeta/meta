/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if(nums.length === 0){
        return -1;
    }
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
    count = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] === ele){
            count++;
        }
    }
    if(count>nums.length/2){
        return ele;
    }else{
        return -1;
    }
    
};