/**
 * @param {number[]} nums
 * @return {number}
 */
// https://leetcode.com/articles/contiguous-array/
// 引入count计数 遇到1 +1 遇到0 -1
// 当两个count一致时，中间的元素(左开右闭 不含开始元素) 0 1 数量一致
// 用hashMap记录count出现的第一个位置
var findMaxLength = function(nums) {
    // 初始化map 注意0的初始化
    const map = {0:-1};
    let count = 0;
    let max = 0;
    for(let i=0;i<nums.length;i++){
        count += nums[i] === 1?1:-1;
        if(map[count] === undefined){
            map[count] = i;
        }else{
            max = Math.max(max,i-map[count]);
        }
    }
    return max;
};