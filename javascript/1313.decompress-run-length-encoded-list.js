/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    const result = [];
    let index = 0;
    while(index<nums.length){
        const count = nums[index];
        const value = nums[index+1];
        for(let i=0;i<count;i++){
            result.push(value);
        }
        index += 2;
    }
    return result;
};