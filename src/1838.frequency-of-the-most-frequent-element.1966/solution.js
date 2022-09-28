/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function (nums, k) {
    nums.sort((a, b) => a - b);
    let result = 0;
    let i = 0;
    while (i < nums.length) {
        let m = i + 1;
        while (m < nums.length && nums[m] === nums[i]) {
            m++;
        }
        let count = m - i;
        let rest = k;
        let j = i - 1;
        while (j > -1 && rest >= (nums[i] - nums[j])) {
            rest -= (nums[i] - nums[j--]);
            count++;
        }
        result = Math.max(result, count);
        i = m;
    }
    return result;
};
