/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(nums) {
    let left = 0;
    let right = nums.length-1;
    while(nums[left]>=nums[right]){
        if(left+1 === right){
            return nums[right];
        }
        const mid = (left+right) >> 1;
        if(nums[left] === nums[right] && nums[left] === nums[mid]){
            let minVal = nums[left];
            for(let i=left+1;i<right+1;i++){
                if(nums[i] < minVal){
                    minVal = nums[i];
                }
            }
            return minVal;
        }

        if(nums[mid]>=nums[left]){
            left = mid;
        }else{
            right = mid;
        }
    }
    return nums[0];
};