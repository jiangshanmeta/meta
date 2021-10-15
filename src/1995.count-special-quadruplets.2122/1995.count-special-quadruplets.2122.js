/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function (nums) {
    const countMap = {};
    let result = 0;
    for (let j = 1; j < nums.length; j++) {
        for (let i = 0; i < j; i++) {
            const sum = nums[i] + nums[j];
            countMap[sum] = (countMap[sum] || 0) + 1;
        }
        for (let k = j + 2; k < nums.length; k++) {
            const minus = nums[k] - nums[j + 1];
            if (countMap[minus]) {
                result += countMap[minus];
            }
        }
    }
    return result;
};
