// 不解释

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const sequences = [[]];
    
    function helper(nums,index,sequence){
        const val = nums[index];
        
        const length = sequence.length;
        for(let i=0;i<length;i++){
            sequence.push(sequence[i].concat(val) );
        }
        
        index++;
        index<nums.length && helper(nums,index,sequence);
    }
    
    helper(nums,0,sequences);
    return sequences;
};