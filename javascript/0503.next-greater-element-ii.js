/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 类似于leetcode 496
var nextGreaterElements = function(nums) {
    const stack = [];
    const n = nums.length;
    const result = new Array(nums.length).fill(-1);
    // 因为是循环数组 所以要2×n
    for(let i=0;i<2*n;i++){
        const val = nums[i%n];
        while(stack.length && nums[stack[stack.length-1]]<val){
            result[stack[stack.length-1]] = val;
            stack.pop();
        }
        i<n && stack.push(i);
    }
    return result;
};