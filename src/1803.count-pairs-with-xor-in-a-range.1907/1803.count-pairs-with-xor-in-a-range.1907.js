/**
 * @param {number[]} nums
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countPairs = function(nums, low, high) {
    let result = 0;
    for(let i=1;i<nums.length;i++){
        for(let j=0;j<i;j++){
            const xor = nums[i]^nums[j];
            if(xor>=low && xor<=high){
                result++;
            }
        }
    }
    return result;
};

