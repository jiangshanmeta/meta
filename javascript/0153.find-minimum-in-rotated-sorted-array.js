/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if(nums[nums.length-1]>nums[0]){
        return nums[0];
    }
    let low = 0;
    let high = nums.length-1;
    
    while(low<=high){
        const mid = (low+high)/2 | 0;
        const left = mid>0?nums[mid-1]:Infinity;
        const right = mid<nums.length-1?nums[mid+1]:Infinity;
        if(nums[mid]<left && nums[mid]<right){
            return nums[mid];
        }
        
        if(nums[mid]>=nums[0]){
            low = mid+1;
        }else{
            high = mid-1;
        }
    }
    
};