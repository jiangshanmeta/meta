/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 思路来自 leetcode 155
var maxSlidingWindow = function(nums, k) {
    if(nums.lengthh === 0 || k===0){
        return [];
    }
    // 保证list[0] 是当前最大的 
    const list = [];
    for(let i=0;i<k;i++){
        // list中比nums[i]小的都干掉
        while(list.length && list[list.length-1]<nums[i]){
            list.pop();
        }
        list.push(nums[i]);
    }
    const result = [list[0]];
    let left = 0;
    // right是要添加的元素的索引
    let right = k;
    while(right<nums.length){
        // 如果list[0] 对应nums[left] 由于num[left]从窗口移除 所以list[0]也要移除
        if(list[0] === nums[left++]){
            list.shift();    
        }
        while(list.length && list[list.length-1]<nums[right]){
            list.pop();
        }
        list.push(nums[right++]);
        result.push(list[0]);
    }
    return result;
};