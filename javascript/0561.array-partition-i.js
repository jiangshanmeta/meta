/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    // 因为取的是一对中的最小值，一对中较大的那一个是浪费的，所以较大的那个最好要接近较小的
    // 所以从小到大排序 取偶数个
    nums.sort((a,b)=>a-b);
    let sum = 0;
    for(let i=0;i<nums.length;i+=2){
        sum += nums[i]
    }
    return sum;
};