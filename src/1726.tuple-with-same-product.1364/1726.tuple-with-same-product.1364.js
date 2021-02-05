/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function (nums) {
    const countBy = {};
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const multi = nums[i] * nums[j];
            countBy[multi] = (countBy[multi] || 0) + 1;
        }
    }

    return Object.values(countBy).reduce((sum, count) => {
        return sum + count * (count - 1) / 2;
    }, 0) * 8;
};
