/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 找到零，然后找到这个零后面第一个非零，互换
// 然后找下一个零
var moveZeroes = function(nums) {
    let zeroIndex = nums.indexOf(0);
    if(zeroIndex === -1){
        return;
    }
    
    let nonZeroIndex = zeroIndex+1;
    while(nonZeroIndex<nums.length && nums[nonZeroIndex] === 0){
        nonZeroIndex++;
    }
    
    while(nonZeroIndex<nums.length){
        nums[zeroIndex] = nums[nonZeroIndex];
        nums[nonZeroIndex] = 0;
        
        zeroIndex = nums.indexOf(0,zeroIndex+1);
        nonZeroIndex = nonZeroIndex+1;
        while(nonZeroIndex<nums.length && nums[nonZeroIndex] === 0){
            nonZeroIndex++;
        }
        
    }
    
};