/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    const result = [];
    for(let i=0;i<index.length;i++){
        const insertIndex = index[i];
        if(insertIndex<result.length){
            result.splice(insertIndex,0,nums[i]);
        }else{
            result[insertIndex] = nums[i];
        }
    }
    return result;
};