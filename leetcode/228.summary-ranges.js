/**
 * @param {number[]} nums
 * @return {string[]}
 */
// 双指针
var summaryRanges = function(nums) {
    const result = [];
    let startIndex = 0;
    // endIndex应该对应第一个不连续的数组
    let endIndex = 1;
    
    while(endIndex<nums.length){
       if(nums[endIndex] !== nums[endIndex-1]+1){
           if(endIndex-startIndex>1){
               result.push(`${nums[startIndex]}->${nums[endIndex-1]}`);
           }else{
               result.push(nums[startIndex]+'');
           }
           startIndex = endIndex;
       }
        
       endIndex++;
    }
    
    if(startIndex<nums.length){
        if(endIndex-startIndex>1){
            result.push(`${nums[startIndex]}->${nums[endIndex-1]}`);
        }else{
            result.push(nums[startIndex]+'');
        }
    }
    
    
    return result;
};