/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    let result = 0;
    let sequenceSubarray = [];
    let sequenceMax = [];
    let sequenceMin = [];

    for(let i=0;i<nums.length;i++){
        sequenceSubarray.push(nums[i]);
        while(sequenceMax.length && sequenceMax[sequenceMax.length-1]<nums[i]){
            sequenceMax.pop();
        }
        sequenceMax.push(nums[i]);
        while(sequenceMin.length && sequenceMin[sequenceMin.length-1]>nums[i]){
            sequenceMin.pop();
        }
        sequenceMin.push(nums[i])
        while(sequenceSubarray.length && sequenceMax[0]-sequenceMin[0]>limit){
            const node = sequenceSubarray.shift();
            if(sequenceMax[0] === node){
                sequenceMax.shift();
            }
            if(sequenceMin[0] === node){
                sequenceMin.shift();
            }
        }

        result = Math.max(result,sequenceSubarray.length);
    }
    return result;
};