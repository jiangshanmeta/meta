/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
    // 找到最大值和次最大值
    let max = -Infinity;
    let lessMax = -Infinity;
    let maxIndex = -1;

    for (let i = 0; i < nums.length; i++) {
        const val = nums[i];
        if (val > max) {
            lessMax = max;
            max = val;
            maxIndex = i;
        }

        if (val > lessMax && val < max) {
            lessMax = val;
        }
    }

    if (max >= 2 * lessMax) {
        return maxIndex;
    }
    return -1;
};
