/**
 * @param {number[]} nums
 * @return {number}
 */
// Moore Voting
var majorityElement = function(nums) {
    let m;
    let count = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] === m){
            count++;
        }else if(count === 0){
            m = nums[i];
            count = 1;
        }else{
            count--;
        }
    }
    return m;
};