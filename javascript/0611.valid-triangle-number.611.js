/**
 * @param {number[]} nums
 * @return {number}
 */
// https://leetcode.com/problems/valid-triangle-number/solution/
var triangleNumber = function (nums) {
    nums.sort((a, b) => a - b);
    let count = 0;
    const startIndex = nums.findIndex((num) => num > 0);
    if (startIndex === -1) {
        return 0;
    }
    for (let i = startIndex; i < nums.length - 2; i++) {
        let k = i + 2;
        for (let j = i + 1; j < nums.length - 1; j++) {
            while (k < nums.length && nums[i] + nums[j] > nums[k]) {
                k++;
            }
            count += k - j - 1;
        }
    }
    return count;
};
