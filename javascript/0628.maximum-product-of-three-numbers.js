/**
 * @param {number[]} nums
 * @return {number}
 */
// 最大的乘积是排序后最大的三个的乘积或者最小的两个数×最大的数
var maximumProduct = function(nums) {
    let min1 = Infinity;
    let min2 = Infinity;
    let max1 = -Infinity;
    let max2 = -Infinity;
    let max3 = -Infinity;
    for(let i=0;i<nums.length;i++){
        const item = nums[i];
        // 找出最小的两个
        if(item<=min1){
            min2 = min1;
            min1 = item;
        }else if(item<min2){
            min2 = item;
        }
        // 找出最大的三个
        if(item>=max1){
            max3 = max2;
            max2 = max1;
            max1 = item;
        }else if(item>=max2){
            max3 = max2;
            max2 = item;
        }else if(item>max3){
            max3 = item;
        }
    }
    return Math.max(
        max1*max2*max3,
        min1*min2*max1,
    );
};