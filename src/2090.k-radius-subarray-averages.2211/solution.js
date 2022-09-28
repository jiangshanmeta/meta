/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function (nums, k) {
    const count = 2 * k + 1;
    if (nums.length < count) {
        return new Array(nums.length).fill(-1);
    }
    const result = new Array(k).fill(-1);
    let sum = 0;
    for (let i = 0; i < 2 * k; i++) {
        sum += nums[i];
    }
    let index = 2 * k;
    while (index < nums.length) {
        sum += nums[index];
        result.push(Math.trunc(sum / count));
        index++;
        sum -= nums[index - count];
    }
    while (result.length < nums.length) {
        result.push(-1);
    }
    return result;
};
