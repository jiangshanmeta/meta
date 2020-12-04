/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function (nums) {
    const cache = {};
    let maxIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[i].length; j++) {
            (cache[i + j] || (cache[i + j] = [])).push(nums[i][j]);
            maxIndex = Math.max(maxIndex, i + j);
        }
    }
    const result = [];
    for (let i = 0; i <= maxIndex; i++) {
        if (!cache[i]) {
            continue;
        }
        for (let j = cache[i].length - 1; j > -1; j--) {
            result.push(cache[i][j]);
        }
    }
    return result;
};
