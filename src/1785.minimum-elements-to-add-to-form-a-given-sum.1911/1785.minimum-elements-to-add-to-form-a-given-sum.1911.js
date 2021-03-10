/**
 * @param {number[]} nums
 * @param {number} limit
 * @param {number} goal
 * @return {number}
 */
var minElements = function(nums, limit, goal) {
    const sum = nums.reduce((sum,item)=>{
        return sum+item
    },0);
    
    const diff = Math.abs(sum-goal);
    return Math.ceil(diff/limit);
};