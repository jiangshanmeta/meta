/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = [];
    backTracking(nums,0,[],result);
    return result;
};

function backTracking(nums,index,sequence,result){
    if(index === nums.length){
        result.push(sequence.slice());
        return;
    }
    
    sequence.push(nums[index]);
    backTracking(nums,index+1,sequence,result);
    sequence.pop();
    
    backTracking(nums,index+1,sequence,result);
}