/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
var mostFrequent = function (nums, key) {
    const countMap = {};
    let resultKey = 0;
    let resultCount = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] !== key) {
            continue;
        }
        if (countMap[nums[i + 1]]) {
            countMap[nums[i + 1]]++;
        } else {
            countMap[nums[i + 1]] = 1;
        }
        const count = countMap[nums[i + 1]];
        if (count > resultCount) {
            resultCount = count;
            resultKey = nums[i + 1];
        }
    }
    return resultKey;
};
