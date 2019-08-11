// Given an array nums sorted in non-decreasing order, and a number target, return True if and only if target is a majority element.
// A majority element is an element that appears more than N/2 times in an array of length N.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var isMajorityElement = function(nums, target) {
    // 先利用二分找到target
    let low = 0;
    let high = nums.length-1;
    while(low<=high){
        const mid = (low+high) >> 1;
        if(nums[mid]>target){
            high = mid-1;
        }else if(nums[mid]<target){
            low = mid+1;
        }else{
            // 找到了target 再利用二分找到开始结束位置
            let start = mid;
            let high2 = mid-1;
            while(low<=high2){
                const mid2 = (low+high2) >> 1;
                if(nums[mid2]<target){
                    low = mid2+1;
                }else{
                    start = Math.min(start,mid2);
                    high2 = mid2-1;
                }
            }
            
            let end = mid;
            let low2 = mid+1;
            while(low2<=high){
                const mid2 = (low2+high) >> 1;
                if(nums[mid2]>target){
                    high = mid2-1;
                }else{
                    end = Math.max(end,mid2);
                    low2 = mid2+1;
                }
            }
            
            return (end-start+1)>nums.length/2;
        }
    }
    // 说明根本没有target
    return false;
};