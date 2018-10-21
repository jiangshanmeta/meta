/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    if(nums.length === 0){
        return -1;
    }
    
    let pivot = 0;
    let leftSum = 0;
    let rightSum = 0;
    for(let i=pivot+1;i<nums.length;i++){
        rightSum += nums[i];
    }
    if(rightSum === 0){
        return 0;
    }
    
    // pivot右移，更新leftSum和rightSum
    while(pivot<nums.length-1){
        leftSum += nums[pivot];
        rightSum -= nums[++pivot];
        if(leftSum === rightSum){
            return pivot;
        }
    }
    return -1;
};