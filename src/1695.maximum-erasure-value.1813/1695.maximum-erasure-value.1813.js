/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function (nums) {
    const map = {};
    let result = 0;
    let current = 0;
    let left = 0;
    let right = 0;
    while (right < nums.length) {
        const index = map[nums[right]];

        if (index === undefined || index < left) {
            current += nums[right];
            result = Math.max(result, current);
        } else {
            for (let i = left; i < index; i++) {
                current -= nums[i];
            }
            left = index + 1;
        }
        map[nums[right]] = right;
        right++;
    }

    return result;
};
