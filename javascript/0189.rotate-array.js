/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // 处理rotate多轮的情况
    k %= nums.length;
    
    // k比较小 按题目说的做
    if(k<Math.floor(nums.length/2)){
        let count = 0;
        while(count<k){
            count++;
            nums.unshift(nums.pop())
        }
        return
    }

    // k比较大 倒着做
    k = nums.length-k;
    let count = 0;
    while(count<k){
        count++;
        nums.push(nums.shift())
    }
};