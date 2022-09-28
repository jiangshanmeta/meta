/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
    const xs = new Array(nums.length + 1).fill(0);
    for (let i = 0; i < nums.length; i++) {
        const num = Math.min(nums[i], nums.length);
        xs[num]++;
    }
    for (let i = xs.length - 1; i > -1; i--) {
        if (i + 1 < xs.length) {
            xs[i] += xs[i + 1];
        }
        if (xs[i] === i) {
            return i;
        }
    }
    return -1;
};
